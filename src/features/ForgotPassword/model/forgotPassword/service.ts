import { post } from "@shared/api";
import { ForgotPasswordRequest } from "./contracts";

export const forgotPasswordRequest = async (body: ForgotPasswordRequest) => {
    return post("/auth/forgot-password", body);
};
