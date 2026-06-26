import { User } from "@shared/auth/types/user";

export type ProfileResponse = {
    data: User;
    message: string;
};
