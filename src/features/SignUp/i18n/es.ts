export const registerLocale = {
    title: "Crear cuenta",
    fields: {
        email: {
            label: "Correo electrónico",
            placeholder: "correo@ejemplo.com",
        },
        password: {
            label: "Contraseña",
            placeholder: "********",
        },
    },
    actions: {
        submit: "Registrarse",
    },
    messages: {
        success: "Cuenta creada correctamente.",
    },
} as const;
