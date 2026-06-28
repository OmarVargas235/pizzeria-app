import { patch } from "@shared/api";
import { EditProfileRequest, EditProfileResponse } from "./contracts";

export const editProfileRequest = async (
    body: EditProfileRequest,
): Promise<EditProfileResponse> => {
    return patch("/profile/me", body);
};
