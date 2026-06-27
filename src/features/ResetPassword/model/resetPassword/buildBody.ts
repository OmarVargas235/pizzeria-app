import { ResetPasswordRequest } from "./contracts";

export const buildResetPasswordBody = (data: ResetPasswordRequest) => ({
    password: data.password,
    token: data.token,
});
