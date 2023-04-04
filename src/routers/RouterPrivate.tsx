// 1.- librerias
import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// 2.- components
import Home from '../main/home';
import Detail from '../main/details';
import Navbar from "../main/navbar";
import Setting from "../main/setting";

interface Props {
    setIsSetting: (v: boolean) => void;
}

const pathSetting = '/setting';

const RouterPublic = ({ setIsSetting }: Props): JSX.Element => {

    const { pathname } = useLocation();

    useEffect(() => setIsSetting(pathname === pathSetting), [pathname]);

    return <>
        <Navbar />

        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/setting' element={<Setting />} />

            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    </>;
}

export default RouterPublic;