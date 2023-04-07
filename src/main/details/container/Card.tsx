// 1.- librerias
import { useState, useRef, MouseEvent } from 'react';

// 2.- components
import CardPage from "../components/CardPage";

// 4.- interfaces
import { StoreDetail } from '../../../helpers/interface';

type Props = Omit<StoreDetail, 'pizzerias'>;

export interface Rotate {
    x: number;
    y: number;
}

const Card = ({ pizzeria }: Props): JSX.Element => {

    const perspectiveRef = useRef<HTMLDivElement>(null);

    const [rotate, setRotate] = useState<Rotate>({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {

        if (perspectiveRef.current === null) return;

        const clientRect = perspectiveRef.current.getBoundingClientRect();

        const x = Math.trunc((e.clientX - clientRect.left) / 5) - 30;
        const y = Math.trunc((e.clientY - clientRect.top) / 6) - 30;

        setRotate({
            x: x*2,
            y: y * -1,
        });
    }

    const resetCoords = (): void => setRotate({ x: 0, y: 0 });

    return <CardPage
        pizzeria={pizzeria}
        handleMouseMove={handleMouseMove}
        rotate={rotate}
        resetCoords={resetCoords}
        perspectiveRef={perspectiveRef}
    />;
}

export default Card;