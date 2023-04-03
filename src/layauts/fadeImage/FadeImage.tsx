// 1.- librerias
import { useLayoutEffect, useRef } from 'react';

// 2.- components
import { Container, Img } from "./styled";

interface Props {
    placeholder: string;
    img: string;
    alt: string;
    className?: string;
    classNameContainer?: string;
    height?: string;
}

const FadeImage = ({ img, alt, placeholder, className='', classNameContainer='', height="100%" }: Props): JSX.Element => {

    const imgRef = useRef(null);
    const placeholderRef = useRef(null);

    useLayoutEffect(() => {

        const { current } = imgRef;
        const { current: currentPlaceholder } = placeholderRef;

        if (current === null || currentPlaceholder === null) return;

        const img: HTMLImageElement = current;
        const placeholder: HTMLImageElement = currentPlaceholder;

        img.addEventListener('load', () => {

            placeholder.classList.add('img-static');
            window.setTimeout(() => placeholder.remove(), 300);
            window.setTimeout(() => img.classList.add('img-animation'), 300);
        });

    }, [imgRef, placeholderRef]);

    return <Container
        className={`d-flex flex-column justify-content-center align-items-center ${classNameContainer}`}
        height={height}
    >
        <Img
            src={img}
            alt={alt}
            loading="lazy"
            ref={imgRef}
            className={className}
        />

        <Img
            src={placeholder}
            alt={alt}
            loading="lazy"
            ref={placeholderRef}
        />
    </Container>;
}

export default FadeImage;