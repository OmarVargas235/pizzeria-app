
// 2.- components
import FadeImage from "../../../layauts/fadeImage/FadeImage";
import { Text } from "../../../layauts/Text";
import { ContainerCard, ContainerImg } from "../styled";

// 3.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

// 4.- iconos
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const CardPage = (): JSX.Element => {

    return <ContainerCard className="d-flex flex-column align-items-center justify-content-center p-4 py-5">
        <ContainerImg className="d-flex flex-column align-items-center justify-content-center p-3">
            <FadeImage
                placeholder={imgLoading}
                img={"https://w7.pngwing.com/pngs/736/179/png-transparent-pizza-pizza-logo-pizza-icon-white-food-camera-icon-thumbnail.png"}
                alt="logo-pizerria"
                classNameContainer="container-img"
            />

            <Text>Sbarro</Text>
            <Text color="#999295" className="mb-1">Calle 2 #3-4</Text>
        </ContainerImg>

        <Text
            color="#999295"
            className="mt-2"
        >Ullamco elit ut et anim ea deserunt laboris ea deserunt laboris.</Text>

        <div className="mt-3">
            <FaFacebookSquare size={25} className="mr-2" />
            <FaInstagram size={25} />
        </div>
    </ContainerCard>;
}

export default CardPage;