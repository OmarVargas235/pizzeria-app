// 1.- librerias
import { useState } from "react";

// 2.- components
import ResetPasswordPage from "../components/ResetPasswordPage";

// 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

export interface Model {
    email: string;
}

const requeridFields = ['email'] as const;
export type RequeridFields = typeof requeridFields[number];

const ResetPassword = (): JSX.Element => {

    const { handleSubmit, handleChange, validateFields, errors } = useForm<Model, RequeridFields>();

    const [form, setForm] = useState<Model>({
        email: '',
    });

    const onSubmit = async (model: object): Promise<void> => {
    
        const newModel = model as Model;
        
        const isError: boolean = validateFields(newModel, [...requeridFields]);
        
        if (isError) return;
    
        console.log('paso');
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