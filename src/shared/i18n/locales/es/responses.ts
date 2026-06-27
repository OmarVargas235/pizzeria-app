import { ResponsesLocale } from "../../types";

export const responses: ResponsesLocale = {
    INVALID_CREDENTIALS: "Correo o contraseña incorrectos.",
    EMAIL_ALREADY_EXISTS: "Ya existe un usuario registrado con ese correo electrónico.",
    INTERNAL_SERVER_ERROR: "Ha ocurrido un error inesperado. Inténtalo nuevamente más tarde.",
    RESOURCE_CONFLICT:
        "La operación no pudo completarse porque el recurso entra en conflicto con el estado actual.",
    VALIDATION_ERROR: "Uno o más campos contienen información no válida.",
};
