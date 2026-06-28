// 1.- libraries
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

// 2.- model
import { editProfileSchema, EditProfileValues } from "../../model/editProfile/schema";
import { updateProfile } from "../../model/editProfile/updateProfile";
import { EditProfileResponse } from "../..//model/editProfile/contracts";

// 3.- store
import { useUIStore } from "@shared/stores/ui";

// 4.- i18n
import { getResponseMessage } from "@shared/i18n";
import { profileLocale } from "../../i18n";

type EditProfileProps = {
    onClose: () => void;
    open: boolean;
};

export const useEditProfile = ({ open, onClose }: EditProfileProps) => {
    const { setLoading, showSnackbar } = useUIStore();
    const queryClient = useQueryClient();

    const [mounted, setMounted] = useState(open);
    const [animated, setAnimated] = useState(false);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const form = useForm<z.input<typeof editProfileSchema>>({
        resolver: zodResolver(editProfileSchema),
    });

    const mutation = useMutation({
        mutationFn: (data: EditProfileValues) =>
            updateProfile({
                firstName: data.name,
                lastName: data.lastName,
                avatar: avatarFile,
            }),
        onSuccess: (updatedProfile) => {
            queryClient.setQueryData<EditProfileResponse>(["profile"], (old) => {
                if (!old) return old;
                return {
                    ...old,
                    data: {
                        ...old.data,
                        ...updatedProfile,
                    },
                };
            });
            showSnackbar({
                message: profileLocale.messages.success,
                title: "",
                variant: "success",
            });
            setAvatarFile(null);
            form.reset();
            onClose();
        },
        onError: (error) => {
            showSnackbar({
                message: getResponseMessage(error.message),
                title: "",
                variant: "error",
            });
        },
        onSettled: () => setLoading(false),
    });

    useEffect(() => {
        let timer;
        if (open) {
            setMounted(true);
            timer = setTimeout(() => setAnimated(true), 100);
        } else {
            setAnimated(false);
            timer = setTimeout(() => setMounted(false), 300);
        }
        return () => clearTimeout(timer);
    }, [open]);

    const onSubmit = (data: EditProfileValues) => {
        setLoading(true);
        mutation.mutate(data);
    };

    const onChange = (file: File | null) => {
        setAvatarFile(file);
    };

    return { onSubmit, onChange, form, mounted, animated };
};
