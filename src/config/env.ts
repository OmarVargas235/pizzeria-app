const requireEnv = (value: string | undefined, name: string): string => {
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }

    return value;
};

export const ENV = {
    API_BASE_URL: requireEnv(process.env.PUBLIC_API_BASE_URL, "PUBLIC_API_BASE_URL"),
} as const;
