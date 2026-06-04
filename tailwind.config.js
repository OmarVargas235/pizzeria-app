/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                dark: "#1F1F23",
                lavender: {
                    50: "#F5F0FF",
                    100: "#E9DDFF",
                    200: "#D4BCFF",
                    300: "#BE9BFF",
                    400: "#A97AFF",
                    500: "#B794F6",
                    600: "#9B6FE6",
                    700: "#7F56D9",
                    800: "#6842C2",
                    900: "#4F2DA6",
                },
            },
        },
    },
    plugins: [],
};
