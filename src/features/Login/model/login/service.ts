import { post } from "@shared/api";
import { LoginResponse, LoginRequest } from "./contracts";

export const loginRequest = async (body: LoginRequest): Promise<LoginResponse> => {
    return post("/auth/login", body);
};
