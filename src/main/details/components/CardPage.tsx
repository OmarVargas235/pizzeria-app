
// 2.- components
import FadeImage from "../../../layauts/fadeImage/FadeImage";
import { Text } from "../../../layauts/Text";
import { ContainerCard, ContainerImg } from "../styled";

// 3.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

// 4.- iconos
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

// 5.- interfaces
import { StoreDetail } from '../../../helpers/interface';

type Props = Omit<StoreDetail, 'pizzerias'>;

const VITE_BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

const CardPage = ({ pizzeria }: Props): JSX.Element => {

    return <ContainerCard className="d-flex flex-column align-items-center justify-content-center px-4 py-4  py-lg-5">
        <ContainerImg className="d-flex flex-column align-items-center justify-content-center p-3">
            <FadeImage
                placeholder={imgLoading}
                img={`${VITE_BACKEND_URL ?? ''}/${pizzeria.logo}`}
                alt="logo-pizerria"
                classNameContainer="container-img"
            />

            <div className="my-3"></div>

            <Text
                weight="bold"
                size="22px"
                className="text-center mt-5 mb-2 theme-dark"
                style={{ lineHeight: '30px' }}
            >{pizzeria.title}</Text>
            <Text color="#999295" className="mb-1 theme-dark">{pizzeria.direction}</Text>
        </ContainerImg>

        <Text
            color="#999295"
            className="mt-2 theme-dark text-center"
        >{pizzeria.description}</Text>

        <div className="mt-3">
            <FaFacebookSquare size={25} className="mr-2 theme-dark" />
            <FaInstagram size={25} className="theme-dark" />
        </div>
    </ContainerCard>;
}

export default CardPage;