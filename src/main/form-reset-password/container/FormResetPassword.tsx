// 1.- librerias
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';

// 2.- components
import FormResetPasswordPage from "../components/FormResetPasswordPage";

// // 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

// // 4.- services
import { auth } from '../../../services/auth';

// // 5.- redux
import { setIsActiveLoading } from '../../../redux/reducers/reducerBlockUI';

// // 6.- helpers
import { alert } from '../../../helpers/utils';

export interface Model {
    password: string;
    repeatPassword: string;
}

const requeridFields = ['password', 'repeatPassword'] as const;
export type RequeridFields = typeof requeridFields[number];

const FormResetPassword = (): JSX.Element => {

    const dispatch = useDispatch();

    const params = useParams();

    const history = useNavigate();

    const { handleSubmit, handleChange, validateFields, errors } = useForm<Model, RequeridFields>();

    const [token, setToken] = useState<string>('');
    const [form, setForm] = useState<Model>({
        password: '',
        repeatPassword: '',
    });

    useEffect(() => {

        const getToken = params.token ?? '';
        const token = getToken.replaceAll('+', '.');

        async function callAPI(): Promise<void> {
            
            dispatch(setIsActiveLoading(true));
            const result = await auth.validateTokenURL(token);
            dispatch(setIsActiveLoading(false));

            result.status === 403 &&
                alert({ dispatch, isAlertSuccess: false, message: result.message, isAlertWarning: true });

            result.status === 403 && history('/login');
        }

        setToken(token);
        void callAPI();

    }, [params]);

    const onSubmit = async (model: object): Promise<void> => {
    
        const newModel = model as Model;
        
        const isError: boolean = validateFields(newModel, [...requeridFields]);
        
        if (isError) return;

        if (newModel.password !== newModel.repeatPassword)
            return alert({ dispatch, isAlertSuccess: false, message: 'Las contraseñas deben ser iguales' });
    
        dispatch(setIsActiveLoading(true));
        const result = await auth.resetPassword({ tokenURL: token, password: newModel.password });
        dispatch(setIsActiveLoading(false));

        alert({ dispatch, isAlertSuccess: result.status === 200, message: result.message });

        result.status === 403 && alert({ dispatch, isAlertSuccess: false, message: result.message, isAlertWarning: true });
        
        result.status === 200 && history('/login');
    }

    return <FormResetPasswordPage
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onSubmit={onSubmit}
        form={form}
        setForm={setForm}
        errors={errors}
    />;
}

export default FormResetPassword;