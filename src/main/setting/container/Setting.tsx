// 1.- librerias
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

// 2.- components
import SettingPage from "../components/SettingPage";

// 3.- hooks
import { useForm } from '../../../hooks/hookForm/useForm';

// 4.- interfaces
import { IInitState, setUser } from '../../../redux/reducers/reducerUser';
import { RootState } from '../../../redux/store';

// 5.- services
import { dataUser } from '../../../services/user';
import { auth } from '../../../services/auth';

// 6.- redux
import { setIsActiveLoading } from '../../../redux/reducers/reducerBlockUI';

// 7.- helpers
import { alert } from '../../../helpers/utils';

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

    const dispatch = useDispatch();

    const { user } = useSelector<RootState, IInitState>(state => state.user);

    const { handleSubmit, handleChange, handleChangeFile, setValuesDefault, imagePreview, setImagePreview } = useForm<Model, keyof {}>();

    const [isOpenModal, setIsOpenModal] = useState(false);

    const [form, setForm] = useState<Model>(defaultValue);

    useEffect(() => {

        if (isOpenModal) return;

        closeModal();

    }, [isOpenModal]);

    const closeModal = (): void => {

        setForm(defaultValue);
        setValuesDefault('file', {});
        setValuesDefault('lastName', '');
        setValuesDefault('name', '');
        setImagePreview(null);
    }
    
    const onSubmit = async (model: object): Promise<void> => {
    
        const newModel = model as Model;
    
        dispatch(setIsActiveLoading(true));
        const result = await dataUser.updateDataUser({ ...newModel, email: user.email });
        dispatch(setIsActiveLoading(false));

        if (result.status !== 200) return alert({ dispatch, isAlertSuccess: false, message: result.message });

        alert({ dispatch, isAlertSuccess: true, message: result.message });

        closeModal();
        setIsOpenModal(false);

        dispatch(setIsActiveLoading(true));
        const resp = await auth.signInWithToken();
        dispatch(setIsActiveLoading(false));

        if (result.status !== 200 || resp.data === null) return alert({ dispatch, isAlertSuccess: false, message: resp.message });

        dispatch(setUser({
            ...resp.data,
            img: resp.data.img === 'null' ? null : resp.data.img
        }));
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
        user={user}
        imagePreview={imagePreview}
    />;
}

export default Setting;