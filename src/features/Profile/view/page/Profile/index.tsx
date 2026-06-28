// 1.- libraries
import { useState } from "react";
import { useRouter } from "@tanstack/react-router";

// 2.- components
import Avatar from "@shared/components/atoms/Avatar";
import EditProfileModal from "../../organisms/EditProfileModal";

// 3.- icons
import { ArrowLeftIcon, PencilIcon } from "@heroicons/react/24/outline";

// 4.- auth
import { useProfile } from "@shared/auth";

const Profile = () => {
    const router = useRouter();
    const [isEditOpen, setIsEditOpen] = useState(false);

    const { data } = useProfile();
    const profile = data!.data;
    const { firstName, lastName, email, avatarUrl } = profile;

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#1F1F23] dark:border dark:border-[#2A2A32] p-8 shadow-lg">
                <button
                    type="button"
                    className="mb-6 flex items-center text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100 dark:hover:bg-[#2A2A32] rounded-md p-1 transition"
                    onClick={() => router.history.back()}
                >
                    <ArrowLeftIcon className="h-6 w-6" />
                </button>
                <div className="relative mx-auto w-fit">
                    <Avatar size="xl" src={avatarUrl} />
                    <button
                        type="button"
                        className="absolute bottom-1 -left-2 rounded-full p-1.5 text-white bg-amber-400 dark:bg-lavender-500 hover:bg-amber-500 dark:hover:bg-lavender-600 shadow-md transition"
                        onClick={() => setIsEditOpen(true)}
                    >
                        <PencilIcon className="h-4 w-4" />
                    </button>
                </div>
                <div className="mt-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                        {firstName} {lastName}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">{email}</p>
                </div>
            </div>
            <EditProfileModal open={isEditOpen} onClose={() => setIsEditOpen(false)} />
        </div>
    );
};

export default Profile;
