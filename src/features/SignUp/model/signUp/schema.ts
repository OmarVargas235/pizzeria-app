import { z } from "zod";

export const signUpSchema = z
    .object({
        name: z
            .string()
            .min(2, "El nombre es muy corto")
            .max(50, "El nombre es muy largo")
            .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Solo letras en el nombre"),
        lastName: z
            .string()
            .min(2, "El apellido es muy corto")
            .max(50, "El apellido es muy largo")
            .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Solo letras en el apellido"),
        email: z.email("Email inválido"),
        password: z
            .string()
            .min(6, "Mínimo 6 caracteres")
            .max(100)
            .regex(/[A-Z]/, "Debe tener al menos una mayúscula")
            .regex(/[a-z]/, "Debe tener al menos una minúscula")
            .regex(/[0-9]/, "Debe tener al menos un número"),
        repeatPassword: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: "Las contraseñas no coinciden",
        path: ["repeatPassword"],
    });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
