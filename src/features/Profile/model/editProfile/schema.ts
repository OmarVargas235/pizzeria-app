import { z } from "zod";

export const editProfileSchema = z.object({
    name: z.string().trim().optional(),
    lastName: z.string().trim().optional(),
    image: z
        .custom<FileList>((val) => val instanceof FileList)
        .optional()
        .refine((files) => !files || files.length === 1, {
            message: "Solo una imagen",
        }),
});

export type EditProfileValues = z.input<typeof editProfileSchema>;
