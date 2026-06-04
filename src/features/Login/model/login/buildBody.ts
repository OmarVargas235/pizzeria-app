import { LoginFormValues } from "./schema";

export const buildLoginBody = (data: LoginFormValues) => ({
    email: data.email,
    password: data.password,
});
