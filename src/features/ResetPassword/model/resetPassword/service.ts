import { post } from "@shared/api";
import { ResetPasswordRequest } from "./contracts";

export const resetPasswordRequest = async (body: ResetPasswordRequest) => {
    return post("/auth/reset-password", body);
};
