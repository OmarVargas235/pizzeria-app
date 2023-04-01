// 1.- librerias
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 2.- components
import Login from '../main/login';
import Register from '../main/register';
import ResetPassword from '../main/reset-password/container/ResetPassword';

const RouterPublic = (): JSX.Element => {

    return <Router>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reset-password' element={<ResetPassword />} />

            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />
        </Routes>
    </Router>;
}

export default RouterPublic;