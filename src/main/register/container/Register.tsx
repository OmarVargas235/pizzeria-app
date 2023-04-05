// 1.- librerias
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// 2.- components
import RegisterPage from "../components/RegisterPage";

// 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

// 4.- services
import { dataUser } from '../../../services/user';

// 5.- redux
import { setIsActiveLoading } from '../../../redux/reducers/reducerBlockUI';

// 6.- utils
import { validateEmail, alert } from "../../../helpers/utils";

export interface Model {
    name: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
}

const requeridFields = ['name', 'lastName', 'email', 'password', 'repeatPassword'] as const;
export type RequeridFields = typeof requeridFields[number];

const Register = (): JSX.Element => {

    const history = useNavigate();

    const dispatch = useDispatch();

    const { handleSubmit, handleChange, validateFields, errors } = useForm<Model, RequeridFields>();

    const [form, setForm] = useState<Model>({
        name: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const onSubmit = async (model: object): Promise<void> => {
    
        const newModel = model as Model;
        
        const isError: boolean = validateFields(newModel, [...requeridFields]);
        
        if (isError) return;

        const isValidateEmail = validateEmail(newModel.email);
        if (!isValidateEmail) return alert({ dispatch, isAlertSuccess: false, message: 'Correo invalido' });

        if (newModel.password !== newModel.repeatPassword)
            return alert({ dispatch, isAlertSuccess: false, message: 'Las contraseñas deben de seriguales' });
        
        dispatch(setIsActiveLoading(true));
        const result = await dataUser.register(newModel);
        dispatch(setIsActiveLoading(false));

        alert({ dispatch, isAlertSuccess: result.status === 200, message: result.message });

        result.status === 200 && history('/login');
    }

    return <RegisterPage
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onSubmit={onSubmit}
        form={form}
        setForm={setForm}
        errors={errors}
    />;
}

export default Register;