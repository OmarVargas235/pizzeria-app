// 1.- librerias
import { useState } from "react";

// 2.- components
import LoginPage from "../components/LoginPage";

// 3.- hooks
import { useForm } from "../../../hooks/hookForm/useForm";

export interface Model {
    email: string;
    password: string;
}

const requeridFields = ['email', 'password'] as const;
export type RequeridFields = typeof requeridFields[number];

const Login = (): JSX.Element => {

    const { handleSubmit, handleChange, validateFields, errors } = useForm<Model, RequeridFields>();

    const [form, setForm] = useState<Model>({
        email: '',
        password: ''
    });

    const onSubmit = async (model: object): Promise<void> => {
    
        const newModel = model as Model;
        
        const isError: boolean = validateFields(newModel, [...requeridFields]);
        
        if (isError) return;
    
        console.log('login');
    }

    return <LoginPage
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onSubmit={onSubmit}
        form={form}
        setForm={setForm}
        errors={errors}
    />;
}

export default Login;