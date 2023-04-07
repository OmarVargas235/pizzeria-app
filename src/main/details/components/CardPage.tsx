// 1.- librerias
import { MouseEvent, RefObject } from 'react';

// 2.- components
import FadeImage from "../../../layauts/fadeImage/FadeImage";
import { Text } from "../../../layauts/Text";
import { ContainerCard, ContainerImg, Perspective } from "../styled";

// 3.- imagenes
import imgLoading from '../../../assets/img/no-image.jpg';

// 4.- iconos
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

// 5.- interfaces
import { StoreDetail } from '../../../helpers/interface';
import { Rotate } from '../container/Card';

type Pizzerias = Omit<StoreDetail, 'pizzerias'>;

interface Props extends Pizzerias {
    handleMouseMove: (v: MouseEvent<HTMLDivElement>) => void;
    rotate: Rotate;
    resetCoords: () => void;
    perspectiveRef: RefObject<HTMLDivElement>;
}

const VITE_BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

const CardPage = ({ pizzeria, handleMouseMove, rotate, resetCoords, perspectiveRef }: Props): JSX.Element => {

    return <Perspective
        onMouseMove={handleMouseMove}
        onMouseOut={resetCoords}
    >
        <ContainerCard
            className="d-flex flex-column align-items-center justify-content-center px-4 py-4  py-lg-5"
            ref={perspectiveRef}
            style={{
                transform: `rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
            }}
        >
            <ContainerImg
                className="d-flex flex-column align-items-center justify-content-center p-3"
            >
                <FadeImage
                    placeholder={imgLoading}
                    img={`${VITE_BACKEND_URL ?? ''}/${pizzeria.logo}`}
                    alt="logo-pizerria"
                    classNameContainer="container-img container-animation"
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

            <div className="mt-3 container-animation">
                <FaFacebookSquare size={25} className="mr-2 theme-dark" />
                <FaInstagram size={25} className="theme-dark" />
            </div>
        </ContainerCard>
    </Perspective>;
}

export default CardPage;