// 1.- librerias
import { useLayoutEffect, useRef } from 'react';

// 2.- components
import { Container, Img } from "./styled";

interface Props {
    placeholder: string;
    img: string;
    alt: string;
    className?: string;
}

const FadeImage = ({ img, alt, placeholder, className='' }: Props): JSX.Element => {

    const imgRef = useRef(null);
    const placeholderRef = useRef(null);

    useLayoutEffect(() => {

        const { current } = imgRef;
        const { current: currentPlaceholder } = placeholderRef;

        if (current === null || currentPlaceholder === null) return;

        const img: HTMLImageElement = current;
        const placeholder: HTMLImageElement = currentPlaceholder;

        img.addEventListener('load', () => placeholder.remove());

    }, [imgRef, placeholderRef]);

    return <Container className='d-flex flex-column justify-content-center align-items-center'>
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