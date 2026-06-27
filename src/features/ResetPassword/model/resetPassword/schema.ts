import { z } from "zod";

export const resetPasswordSchema = z
    .object({
        password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
        repeatPassword: z.string(),
    })
    .refine((data) => data.password === data.repeatPassword, {
        message: "Las contraseñas no coinciden",
        path: ["repeatPassword"],
    });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
