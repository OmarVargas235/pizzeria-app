// 1.- libraries
import { ComponentProps } from "react";

// 2.- icons
import { UserIcon } from "@heroicons/react/24/solid";

// 3.- utils
import { classNames } from "@shared/utils";

type AvatarProps = Omit<ComponentProps<"img">, "src" | "alt"> & {
    src?: string | null;
    alt?: string;
    size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
};

const iconSizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-14 h-14",
};

const Avatar = ({ src, alt = "Avatar", size = "md", className = "", ...props }: AvatarProps) => {
    if (src) {
        return (
            <img
                src={src}
                alt={alt}
                className={classNames(
                    "rounded-full object-cover border border-gray-200",
                    "dark:border-[#3A3A45]",
                    "dark:ring-1 dark:ring-[#2A2A32]",
                    sizeClasses[size],
                    className,
                )}
                {...props}
            />
        );
    }
    return (
        <div
            className={classNames(
                "rounded-full bg-gray-100 dark:bg-[#2A2A32]",
                "border-2 border-gray-800 dark:border-[#3A3A45]",
                "flex items-center justify-center",
                sizeClasses[size],
                className,
                "transition",
                "dark:hover:border-cyan-400/40 dark:hover:bg-[#2E2E38]",
            )}
            onClick={props.onClick}
        >
            <UserIcon
                className={classNames("text-gray-400 dark:text-slate-300", iconSizeClasses[size])}
            />
        </div>
    );
};

export default Avatar;
