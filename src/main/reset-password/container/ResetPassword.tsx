// 1.- librerias
import { useState } from "react";
import { useDispatch } from "react-redux";

// 2.- components
import ResetPasswordPage from "../components/ResetPasswordPage";

// 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

// 4.- services
import { auth } from '../../../services/auth';

// 5.- redux
import { setIsActiveLoading } from '../../../redux/reducers/reducerBlockUI';

// 6.- helpers
import { alert } from '../../../helpers/utils';

export interface Model {
    email: string;
}

const requeridFields = ['email'] as const;
export type RequeridFields = typeof requeridFields[number];

const ResetPassword = (): JSX.Element => {

    const dispatch = useDispatch();

    const { handleSubmit, handleChange, validateFields, errors } = useForm<Model, RequeridFields>();

    const [form, setForm] = useState<Model>({
        email: '',
    });

    const onSubmit = async (model: object): Promise<void> => {
    
        const newModel = model as Model;
        
        const isError: boolean = validateFields(newModel, [...requeridFields]);
        
        if (isError) return;
    
        dispatch(setIsActiveLoading(true));
        const result = await auth.sendEmail(newModel.email);
        dispatch(setIsActiveLoading(false));

        alert({ dispatch, isAlertSuccess: result.status === 200, message: result.message });
    }

    return <ResetPasswordPage
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onSubmit={onSubmit}
        form={form}
        setForm={setForm}
        errors={errors}
    />;
}

export default ResetPassword;