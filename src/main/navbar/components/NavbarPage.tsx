// 1.- librerias
import { useSelector } from 'react-redux';

// 2.- components
import { Container, ContainerMenu, ContainerImg, Option } from '../styled';
import { Text } from '../../../layauts/Text';
import FadeImage from '../../../layauts/fadeImage/FadeImage';
import BtnToggle from './BtnToggle';
import Avatar from "../../../layauts/Avatar";

// 3.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

// 4.- iconos
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { BsGearFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

// 5.- utils
import { idClose } from '../container/Navbar';

// 6.- redux
import { IInitState } from '../../../redux/reducers/reducerUser';
import { RootState } from '../../../redux/store';

interface Props {
    isOpen: boolean;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    closeNavbar: () => void;
    redirectSetting: () => void;
    closeSesion: () => void;
    isDark: boolean;
}

const VITE_BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

const NavbarPage = ({ isOpen, handleClick, closeNavbar, redirectSetting, closeSesion, isDark }: Props): JSX.Element => {

    const { user } = useSelector<RootState, IInitState>(state => state.user);

    return <Container
        className='d-flex justify-content-end'
        onClick={handleClick}
        id={idClose}
    >
        <ContainerMenu isOpen={isOpen}>
            <div className='pb-4 pr-3 pt-3 w-100 text-right'>
                <AiFillCloseCircle
                    size={25}
                    className='pointer'
                    onClick={closeNavbar}
                />
            </div>

            <div className='mx-3'>
                {
                    user.img === null
                    ? <Avatar
                        className="pointer"
                        onClick={handleClick}
                    >{user.name.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}</Avatar>
                    : <ContainerImg className='d-flex justify-content-center align-items-center'>
                        <FadeImage
                            placeholder={imgLoading}
                            img={`${VITE_BACKEND_URL}/${user.img}`}
                            alt="imgPizza"
                        />
                    </ContainerImg>
                }
            </div>

            <Text className='my-4 mx-3' color='#656265'>Bienvenido {user.name} {user.lastName}</Text>

            <Option
                className='d-flex align-items-center justify-content-evenly px-3 py-2'
                onClick={closeSesion}
                isDark={isDark}
            >
                <HiArrowRightOnRectangle size={25} className='mr-3' />
                <Text weight='bold'>Cerrar Sesión</Text>
            </Option>

            <Option
                className='d-flex align-items-center my-4 px-3 py-2'
                onClick={redirectSetting}
                isDark={isDark}
            >
                <BsGearFill size={25} className='mr-3' />
                <Text weight='bold'>Cuneta</Text>
            </Option>

            <div className='mx-3'>
                <BtnToggle />
            </div>
        </ContainerMenu>
    </Container>;
}

export default NavbarPage;