// 1.- librerias
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 2.- components
import Login from '../main/login';
import Register from '../main/register';
import ResetPassword from '../main/reset-password/container/ResetPassword';

interface Props {
    setIsSetting: (v: boolean) => void;
}

const RouterPublic = ({ setIsSetting }: Props): JSX.Element => {

    useEffect(() => setIsSetting(false), []);

    return <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        <Route
            path="*"
            element={<Navigate to="/login" replace />}
        />
    </Routes>;
}

export default RouterPublic;