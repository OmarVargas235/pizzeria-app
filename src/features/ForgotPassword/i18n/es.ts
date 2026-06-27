export const forgotPasswordLocale = {
    title: "Recuperar contraseña",
    fields: {
        email: {
            label: "Correo electrónico",
            placeholder: "correo@ejemplo.com",
        },
    },
    actions: {
        submit: "Enviar enlace de recuperación",
    },
    messages: {
        success:
            "Si el correo está registrado, recibirás un enlace para restablecer tu contraseña.",
    },
} as const;
