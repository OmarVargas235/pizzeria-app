import { ResponseCode } from "@shared/constants/responseCode";

export const RESPONSE_MESSAGES: Record<ResponseCode, string> = {
    INVALID_CREDENTIALS: "Correo o contraseña incorrectos.",
    EMAIL_ALREADY_EXISTS: "Ya existe un usuario registrado con ese correo.",
};
