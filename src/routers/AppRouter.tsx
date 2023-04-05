// 1.- librerias
import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// 2.- components
import RouterPublic from './RouterPublic';
import RouterPrivate from './RouterPrivate';
import Alert from '../layauts/alert/Alert';
import Spinner from '../layauts/spinner/Spinner';

// 3.- context
import { AuthContext } from '../auth/AuthProvider';

interface Props {
    setIsSetting: (v: boolean) => void;
}

const AppRouter = ({ setIsSetting }: Props): JSX.Element => {

    const { isAuth } = useContext(AuthContext);

    return <Router>

        <Alert />
        <Spinner />

        {
            isAuth
                ? <RouterPrivate setIsSetting={setIsSetting} />
                : <RouterPublic setIsSetting={setIsSetting} />
        }
    </Router>;
}

export default AppRouter;