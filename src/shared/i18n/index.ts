import { ResponseCode } from "@shared/types/response.codes";
import { es } from "./locales/es";
export const locale = es;
export const getResponseMessage = (code: string): string => {
    return locale.responses[code as ResponseCode] ?? locale.common.messages.defaultError;
};
