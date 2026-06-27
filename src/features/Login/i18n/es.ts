export const loginLocale = {
    title: "Iniciar sesión",
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
        submit: "Ingresar",
    },
    messages: {
        success: "Sesión iniciada correctamente.",
    },
} as const;
