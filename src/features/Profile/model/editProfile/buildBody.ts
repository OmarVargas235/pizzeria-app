import { EditProfileValues } from "./schema";

export const buildProfileBody = (data: EditProfileValues) => ({
    firstName: data.name,
    lastName: data.lastName,
});

export const buildAvatarBody = (avatar: File): FormData => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    return formData;
};
