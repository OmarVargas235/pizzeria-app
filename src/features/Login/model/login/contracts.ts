import { Session } from "@shared/types/auth.store";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    data: Session;
}
