// 1.- librerias

// 2.- components
import RouterPublic from './RouterPublic';
import RouterPrivate from './RouterPrivate';

const AppRouter = (): JSX.Element => {

    return <>
        {
            false ? <RouterPrivate /> :  <RouterPublic />
        }
    </>;
}

export default AppRouter;