
// 2.- components
import FadeImage from "../../../layauts/fadeImage/FadeImage";
import { Text } from "../../../layauts/Text";
import { ContainerCardPizza } from '../styled';

// 3.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

// 4.- interfaces
// import { StoreDetail } from "../../../helpers/interface";

interface Props {
    data: {
        id: number;
        img: string;
        description: string;
    }
}

const VITE_BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

const CardPizzaPage = ({ data }: Props): JSX.Element => {

    return <ContainerCardPizza className="col-12 col-lg-6 pl-0">
        <div className="mb-3 d-flex">
            <FadeImage
                placeholder={imgLoading}
                img={`${VITE_BACKEND_URL}/${data.img}`}
                alt="logo-pizerria"
                classNameContainer="container-img w-25"
                className="img-logo"
            />

            <div
                className="w-75 d-flex justify-content-center align-items-center"
            >
                <Text>{data.description}</Text>
            </div>
        </div>
    </ContainerCardPizza>;
}

export default CardPizzaPage;