// 1.- librerias
import { MouseEvent, useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// 2.- components
import NavbarPage from "../components/NavbarPage";

// 3.- redux
import { RootState } from '../../../redux/reducers';
import { IInitState, setDesactiveNavbar } from '../../../redux/reducers/reducerOpenNavbar';

// 4.- services
import { auth } from '../../../services/auth';

// 5.- context
import { AuthContext } from '../../../auth/AuthProvider';

export const idClose = 'close';

const Detail = (): JSX.Element => {

    const history = useNavigate();

    const dispatch = useDispatch();

    const { setIsAuth } = useContext(AuthContext);

    const { isOpen } = useSelector<RootState, IInitState>(state => state.isOpenNavbar);

    const [isOpenNavbar, setIsopenNavbar] = useState(false);

    useEffect(() => {

        if (!isOpen) {

            window.setTimeout(() => setIsopenNavbar(false), 600);
            return;
        }

        setIsopenNavbar(isOpen);

    }, [isOpen]);

    const handleClick = (e: MouseEvent<HTMLDivElement>): void => {

        const target = e.target as HTMLDivElement;
        target.id === idClose && closeNavbar();
    }

    const closeNavbar = (): void => { dispatch(setDesactiveNavbar()); };

    const redirectSetting = (): void => {

        history('/setting');
        dispatch(setDesactiveNavbar());
    }

    const closeSesion = (): void => {

        auth.logout();
        setIsAuth(false);
    }

    return <>
        {
            isOpenNavbar
                ? <NavbarPage
                    isOpen={isOpen}
                    handleClick={handleClick}
                    closeNavbar={closeNavbar}
                    redirectSetting={redirectSetting}
                    closeSesion={closeSesion}
                />
                : null
        }
    </>;
}

export default Detail;