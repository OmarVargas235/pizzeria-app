import { EditProfileValues } from "./schema";

export const buildBody = (data: EditProfileValues) => ({
    firstName: data.name,
    lastName: data.lastName,
});
