// 1.- librerias
import { useNavigate } from 'react-router-dom';

// 2.- components
import { Container, ContainerImage } from "../styled";
import FadeImage from '../../../layauts/fadeImage/FadeImage';
import { Text } from '../../../layauts/Text';

// 3.- iconos
import { BsArrowLeftShort } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";

// 4.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

const SettingPage = (): JSX.Element => {

    const history = useNavigate();

    return <Container className='pb-4'>
        <div className="w-100 p-2">
            <BsArrowLeftShort 
                size={40}
                className="pointer"
                onClick={() => history('login')}
            />
        </div>

        <ContainerImage className='d-flex justify-content-center'>
            <FadeImage
                placeholder={imgLoading}
                img={"https://cdn-icons-png.flaticon.com/512/3135/3135768.png"}
                alt="profile"
                classNameContainer='image-profile'
            />

            <MdModeEditOutline size={25} color='black' className='pointer' />
        </ContainerImage>

        <Text
            size='25px'
            weight='bold'
            className='text-center mt-4'
        >Omar Vargas</Text>

        <Text
            color='#5A585E'
            className='text-center'
        >omravaja@hotmail.com</Text>
    </Container>;
}

export default SettingPage;