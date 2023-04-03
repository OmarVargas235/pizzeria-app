
// 2.- components
import FadeImage from "../../../layauts/fadeImage/FadeImage";
import { Text } from "../../../layauts/Text";
import { ContainerCardPizza } from '../styled';

// 3.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

const CardPizzaPage = (): JSX.Element => {

    // return <ContainerCardPizza className="d-flex align-items-center col-6 mb-2 px-0">
    return <ContainerCardPizza className="col-12 col-lg-6 pl-0">
        <div className="mb-3 d-flex">
            <FadeImage
                placeholder={imgLoading}
                img={"https://w7.pngwing.com/pngs/736/179/png-transparent-pizza-pizza-logo-pizza-icon-white-food-camera-icon-thumbnail.png"}
                alt="logo-pizerria"
                classNameContainer="container-img w-25"
                className="img-logo"
            />

            <div
                className="w-75 d-flex justify-content-center align-items-center"
            >
                <Text>Pizza pollo</Text>
            </div>
        </div>
    </ContainerCardPizza>;
}

export default CardPizzaPage;