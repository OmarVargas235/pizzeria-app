// 1.- librerias
import { useState } from "react";

// 2.- components
import RegisterPage from "../components/RegisterPage";

// 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

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
    
        console.log('paso');
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