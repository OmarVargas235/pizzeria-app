import { ForgotPasswordFormValues } from "./schema";

export const buildForgotPasswordBody = (data: ForgotPasswordFormValues) => ({
    email: data.email,
});
