// 1.- librerias
import { useState, useEffect } from "react";

// 2.- components
import SettingPage from "../components/SettingPage";

// 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

export interface Model {
    name: string;
    lastName: string;
    file: {
        lastModified: number;
        lastModifiedDate: Date;
        name: string;
        size: number;
        type: string;
        webkitRelativePath: string;
    } | {};
}

const defaultValue = {
    file: {},
    lastName: '',
    name: ''
}

const Setting = (): JSX.Element => {

    const { handleSubmit, handleChange, handleChangeFile, setValuesDefault } = useForm<Model, keyof {}>();

    const [isOpenModal, setIsOpenModal] = useState(false);

    const [form, setForm] = useState<Model>(defaultValue);

    useEffect(() => {

        if (isOpenModal) return;

        setForm(defaultValue);
        setValuesDefault('file', {});
        setValuesDefault('lastName', '');
        setValuesDefault('name', '');

    }, [isOpenModal]);
    
    const onSubmit = async (model: object): Promise<void> => {
    
        const newModel = model as Model;
    
        console.log(newModel);
    }

    return <SettingPage
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        handleChange={handleChange}
        handleChangeFile={handleChangeFile}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        form={form}
        setForm={setForm}
    />;
}

export default Setting;