import { ValidationLocale } from "../../types";

export const validation: ValidationLocale = {
    required: "Campo obligatorio",
    invalidEmail: "Correo inválido",
    minLength: (value: number) => `Mínimo ${value} caracteres`,
};
