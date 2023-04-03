// 1.- librerias
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 2.- components
import Home from '../main/home';
import Detail from '../main/details';

const RouterPublic = (): JSX.Element => {

    return <Router>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />

            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    </Router>;
}

export default RouterPublic;