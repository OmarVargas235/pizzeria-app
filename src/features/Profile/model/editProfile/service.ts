import { patch } from "@shared/api";
import { EditProfileRequest, EditProfileResponse } from "./contracts";

export const editProfileRequest = async (
    body: EditProfileRequest,
): Promise<EditProfileResponse> => {
    return patch("/profile/me", body);
};

export const uploadRequest = async (body: FormData): Promise<EditProfileResponse> => {
    return patch("/profile/avatar", body);
};
