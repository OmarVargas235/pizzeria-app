
// 2.- components
import { Container, ContainerMenu, ContainerImg, Option } from '../styled';
import { Text } from '../../../layauts/Text';
import FadeImage from '../../../layauts/fadeImage/FadeImage';
import BtnToggle from './BtnToggle';

// 3.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

// 4.- iconos
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { BsGearFill } from 'react-icons/bs';

const NavbarPage = (): JSX.Element => {


    return <Container className='d-flex justify-content-end'>
        <ContainerMenu className='pt-5'>
            <ContainerImg className='d-flex justify-content-center align-items-center mx-3'>
                <FadeImage
                    placeholder={imgLoading}
                    img={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"}
                    alt="imgPizza"
                />
            </ContainerImg>

            <Text className='my-4 mx-3' color='#656265'>Bienvenido Omar Vargas</Text>

            <Option className='d-flex align-items-center justify-content-evenly px-3 py-2'>
                <HiArrowRightOnRectangle size={25} className='mr-3' />
                <Text weight='bold'>Cerrar Sesión</Text>
            </Option>

            <Option className='d-flex align-items-center my-4 px-3 py-2'>
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