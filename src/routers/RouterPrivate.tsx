// 1.- librerias
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 2.- components

const RouterPublic = (): JSX.Element => {

    return <Router>
        <Routes>
            <Route path='/home' element={<div>Home</div>} />

            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    </Router>;
}

export default RouterPublic;