import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { setIsActiveAlert, setIsAlertSuccess, setIsAlertWarning, setMessageAlert } from '../redux/reducers/reducerAlert';

interface FormatDecimals {
    n: number;
    symbol?: string;
    nDecimals?: number;
}

interface Alert {
    dispatch: Dispatch<AnyAction>;
    isAlertSuccess: boolean;
    isAlertWarning?: boolean;
    message: string;
}

export const validateEmail = (email: string): boolean => {

    return (/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i).test(email);
}

export const alert = ({ dispatch, isAlertSuccess, message, isAlertWarning=false }: Alert): void => {

    dispatch(setIsActiveAlert(true));
    dispatch(setIsAlertSuccess(isAlertSuccess));
    dispatch(setIsAlertWarning(isAlertWarning));
    dispatch(setMessageAlert(message));
}

export const formatDecimals = ({ n, symbol="S/", nDecimals= 2 }: FormatDecimals): string => {

    const nString = n.toString().replaceAll(',', '.');

    const integer = Number.isInteger( Number(nString) ) ? nString : nString.split('.')[0];
    const decimals = parseFloat(nString).toFixed(nDecimals).split('.')[1] ?? '0'.repeat(nDecimals);
    
    if (integer.length < 4) return `${symbol} ${integer}.${decimals}`;

    const countDecimalPoints = integer.length / 3;
    const nDecimalPoints = Number.isInteger(countDecimalPoints)
    ? countDecimalPoints - 1 : Math.floor(countDecimalPoints);
    
    let position = 0;
    let numberDecimalPoints = '';

    for (let i = 0; i < nDecimalPoints; i++) {

        position = i === 0 ? (integer.length - 3) : position-3;
        const decimalPoint = integer.slice(0, position) + "," + integer.slice(position);
        const lastPosition = i+1 === nDecimalPoints;
        
        numberDecimalPoints = `,${decimalPoint.split(",")[1].slice(0, 3)}${numberDecimalPoints}`;
        lastPosition && (numberDecimalPoints = `${integer.slice(0, position)}${numberDecimalPoints}`);
    }

    numberDecimalPoints += `.${decimals}`;

    return `${symbol} ${numberDecimalPoints}`;
}

export const roundDecimals = (n: number, decimals: number): number => Number(parseFloat(n.toString()).toFixed(decimals));

export const deleteMap = <T extends Record<string, unknown> | ArrayLike<unknown>>(data: T, id: number): T => {

    const mapData = new Map(Object.entries(data));

    id in data && mapData.delete(id.toString());

    const objectData = Object.fromEntries(mapData) as unknown as T;

    return objectData;
}

export const mediaQueryListView = (): string => (`
    @media (min-height: 700px) {
        height: 300px;
    }

    @media (min-height: 850px) {
        height: 450px;
    }

    @media (min-height: 950px) {
        height: 650px;
    }

    @media (min-height: 1300px) {
        height: 850px;
    }

    @media (min-height: 1500px) {
        height: 1050px;
    }

    @media (min-height: 1650px) {
        height: 1250px;
    }
`);