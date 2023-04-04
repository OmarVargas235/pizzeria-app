// 1.- librerias
import { BrowserRouter as Router } from 'react-router-dom';

// 2.- components
import RouterPublic from './RouterPublic';
import RouterPrivate from './RouterPrivate';

interface Props {
    setIsSetting: (v: boolean) => void;
}

const AppRouter = ({ setIsSetting }: Props): JSX.Element => {

    return <Router>
        {
            true ? <RouterPrivate setIsSetting={setIsSetting} /> :  <RouterPublic />
        }
    </Router>;
}

export default AppRouter;