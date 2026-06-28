// 1.- libraries
import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

// 2.- components
import Avatar from "@shared/components/atoms/Avatar";
import Switch from "@shared/components/atoms/Switch";

// 3.- icons
import {
    ArrowLeftStartOnRectangleIcon,
    UserCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

// 4.- utils
import { classNames } from "@shared/utils";

// 5.- store
import { useUIStore } from "@shared/stores/ui";

// 6.- auth
import { useLogout, useProfile } from "@shared/auth";

type ProfileDrawerProps = {
    open: boolean;
    onClose: () => void;
};

const ProfileDrawer = ({ open, onClose }: ProfileDrawerProps) => {
    const navigate = useNavigate();
    const { theme, toggleTheme, setLoading, showSnackbar } = useUIStore();

    const [checked, setChecked] = useState(theme === "dark");
    const [mounted, setMounted] = useState(open);
    const [animated, setAnimated] = useState(false);

    const { data } = useProfile();
    const { avatarUrl, firstName, lastName } = data!.data;

    const { logout } = useLogout({
        onSuccess: () => {
            showSnackbar({
                message: "Sesión cerrada correctamente.",
                title: "",
                variant: "success",
            });
        },
        onError: () => {
            showSnackbar({
                message: "Ha ocurrido un error",
                title: "",
                variant: "success",
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

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-50 flex overflow-hidden">
            <div className="w-full bg-black/50 dark:bg-black/60" onClick={onClose} />
            <aside
                className={classNames(
                    "absolute h-full right-0 w-1/4 min-w-72 bg-white dark:bg-[#1F1F23] shadow-xl p-6 flex flex-col border-l border-transparent dark:border-[#2A2A32] transform transition-transform ease-out",
                    animated ? "translate-x-0 duration-300" : "translate-x-[200%] duration-700",
                )}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-md p-1 text-gray-500 dark:text-slate-400 hover:bg-red-500/10 hover:text-red-400 dark:hover:text-red-400 transition-colors"
                    aria-label="Cerrar panel"
                >
                    <XMarkIcon className="w-5 h-5" />
                </button>
                <div className="flex flex-col items-center">
                    <Avatar size="lg" src={avatarUrl} />
                    <h3 className="mt-4 font-semibold dark:text-slate-100">
                        Hola, {firstName} {lastName}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-slate-400">
                        Bienvenido nuevamente
                    </p>
                </div>
                <div className="mt-10 flex flex-col gap-2">
                    <button
                        className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-[#2A2A32] hover:text-slate-100 transition group"
                        onClick={() => navigate({ to: "/profile" })}
                    >
                        <UserCircleIcon className="w-5 h-5 dark:group-hover:text-lavender-400" />
                        <span className="dark:group-hover:text-lavender-400">Cuenta</span>
                    </button>
                    <button
                        className="flex items-center gap-3 p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-[#2A2A32] hover:text-slate-100 transition group"
                        onClick={() => {
                            logout();
                            setLoading(true);
                        }}
                    >
                        <ArrowLeftStartOnRectangleIcon className="w-5 h-5 dark:group-hover:text-lavender-400" />
                        <span className="dark:group-hover:text-lavender-400">Cerrar sesión</span>
                    </button>
                </div>
                <div className="mt-auto border-t pt-6 border-gray-200 dark:border-[#2A2A32]">
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800 dark:text-slate-300">
                            {checked ? "Modo oscuro" : "Modo claro"}
                        </span>
                        <Switch
                            checked={checked}
                            onChange={(value) => {
                                setChecked(value);
                                toggleTheme();
                            }}
                        />
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default ProfileDrawer;
