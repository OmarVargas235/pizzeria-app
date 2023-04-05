// 1.- librerias
import { Suspense, lazy, useState, useEffect, useContext } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

// 3.- imagenes
import imgBg from './assets/img/imagebkg.png';
import imgPizza from './assets/img/Pizza.png';
import imgLoading from './assets/img/no-image.jpg';

// 2.- redux
import { setActiveDark, IInitState } from './redux/reducers/reducerTheme';
import { RootState } from './redux/store';

// 3.- context
import { AuthContext } from './auth/AuthProvider';

// 4.- components
import Spinner from "./layauts/spinner/Spinner";
const FadeImage = lazy(async () => await import("./layauts/fadeImage/FadeImage"));
const AppRouter = lazy(async () => await import("./routers/AppRouter"));

const VITE_BASE_URL: string = import.meta.env.VITE_BASE_URL;

/**
 * Axios HTTP Request defaults
 */
axios.defaults.baseURL = VITE_BASE_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
        background-image: url("${imgBg}");
        background-size: cover;
	}
`;

const Container = styled.div`
    min-height: 100vh;
    position: relative;

    .btn {
        color: black;
    }

    .pizza {
        animation: pizzaRotate 6s linear infinite !important;
        width: 80%;
    }

    @keyframes pizzaRotate {
        from {
            transform: rotateZ(0deg);
        }

        to {
            transform: rotateZ(360deg);
        }
    }
`;

const ColumnLeft = styled.article`
    overflow: hidden;

    @media (max-width: 576px) {
        min-height: 100vh;
    }
`;

const ColumnRight = styled.article<{ isSetting: boolean; isDark: boolean; isAuth: boolean; }>`
    width: 100%;
    background-color: ${props => props.isSetting ? '' : 'white'};

    @media (max-width: 576px) {
        position: absolute;
        background-color: rgba(254, 254, 254, .9);
        top: 25%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        height: 75%;
        overflow-y: scroll;
        padding-top: 170px;
    }

    ${({ isDark, isSetting, isAuth }) => (isDark && isAuth) ? (`
        background-color: ${isSetting ? '' : '#303030'};
        
        nav {
            background-color: #303030;
        }

        p, svg {
            color: white !important;
        }

        .theme-dark {
            color: #232229 !important;
        }

        .container-modal {
            background-color: #232229;
        }

        .label {
            color: white;
        }
    `) : ''};
`;

function App(): JSX.Element {

    const { isAuth } = useContext(AuthContext);

    const dispatch = useDispatch();
    const { isDark } = useSelector<RootState, IInitState>(state => state.theme);

    const [isSetting, setIsSetting] = useState<boolean>(false);

    useEffect(() => {

        const getLS = window.localStorage.getItem('theme') ?? 'false';
        const isDark = JSON.parse(getLS);

        dispatch(setActiveDark(isDark));

    }, []);

    return <Suspense fallback={<Spinner isLoading={true} />}>

        <GlobalStyle />

        <Container className="row">
            <ColumnLeft className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
                <FadeImage
                    placeholder={imgLoading}
                    img={imgPizza}
                    alt="imgPizza"
                    className="pizza"
                />
            </ColumnLeft>

            <ColumnRight
                className="col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center pb-3 pt-sm-3"
                isSetting={isSetting}
                isDark={isDark}
                isAuth={isAuth}
            >
                <AppRouter
                    setIsSetting={setIsSetting}
                />
            </ColumnRight>
        </Container>
    </Suspense>;
}

export default App;