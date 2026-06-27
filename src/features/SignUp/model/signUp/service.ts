import { post } from "@shared/api";
import { SignUpRequest, SignUpResponse } from "./contracts";

export const signUpRequest = async (body: SignUpRequest): Promise<SignUpResponse> => {
    return post("/auth/register", body);
};
