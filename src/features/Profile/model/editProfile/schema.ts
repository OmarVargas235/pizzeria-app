import { z } from "zod";

export const editProfileSchema = z.object({
    name: z.string().trim().optional(),
    lastName: z.string().trim().optional(),
});

export type EditProfileValues = z.input<typeof editProfileSchema>;
