import { EditProfileValues } from "./schema";

export const buildBody = (data: EditProfileValues) => ({
    name: data.name,
    image: data.image,
});
