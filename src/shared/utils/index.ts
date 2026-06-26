import type { ResponseCode } from "@shared/constants/responseCode";
import { RESPONSE_MESSAGES } from "@shared/i18n/es/responseMessages";

export const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
};

export const getResponseMessage = (code: string): string => {
    return RESPONSE_MESSAGES[code as ResponseCode] ?? "Ha ocurrido un error inesperado.";
};
