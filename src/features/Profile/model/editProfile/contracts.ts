import { User } from "@shared/auth/types/user";

export interface EditProfileRequest {
    firstName: string | undefined;
    lastName: string | undefined;
}

export interface EditProfileResponse {
    message: string;
    data: User;
}
