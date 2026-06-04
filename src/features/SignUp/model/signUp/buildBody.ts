import { SignUpFormValues } from "./schema";

export const buildSignUpBody = (data: SignUpFormValues) => ({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    repeatPassword: data.repeatPassword,
});
