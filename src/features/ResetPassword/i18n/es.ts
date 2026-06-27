export const resetPasswordLocale = {
    title: "Restablecer contraseña",
    fields: {
        password: {
            label: "Nueva contraseña",
            placeholder: "********",
        },
        confirmPassword: {
            label: "Confirmar contraseña",
            placeholder: "********",
        },
    },
    actions: {
        submit: "Actualizar contraseña",
    },
    messages: {
        success: "Tu contraseña ha sido actualizada correctamente.",
    },
} as const;
