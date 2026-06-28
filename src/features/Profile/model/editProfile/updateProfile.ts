import { buildProfileBody, buildAvatarBody } from "./buildBody";
import { editProfileRequest, uploadRequest } from "./service";

type UpdateProfileParams = {
    firstName: string | undefined;
    lastName: string | undefined;
    avatar: File | null;
};

export const updateProfile = async ({ firstName, lastName, avatar }: UpdateProfileParams) => {
    const profilePromise =
        firstName || lastName
            ? editProfileRequest(buildProfileBody({ name: firstName, lastName }))
            : Promise.resolve(null);
    const avatarPromise = avatar ? uploadRequest(buildAvatarBody(avatar)) : Promise.resolve(null);
    const [profile, avatarResponse] = await Promise.all([profilePromise, avatarPromise]);
    const updatedProfile = {
        ...(profile && {
            firstName: profile.data.firstName,
            lastName: profile.data.lastName,
        }),
        ...(avatar && {
            avatarUrl: avatarResponse!.data.avatarUrl,
        }),
    };

    return updatedProfile;
};
