// 1.- libraries
import { ComponentProps, ReactNode } from "react";
import { classNames } from "@shared/utils";

type ButtonProps = ComponentProps<"button"> & {
    children: ReactNode;
    icon?: ReactNode;
};

const Button = ({ children, icon, className = "", type = "button", ...props }: ButtonProps) => {
    return (
        <button
            type={type}
            className={classNames(
                "inline-flex items-center justify-center gap-x-2",
                "rounded px-6 py-1.5",
                "bg-amber-300",
                "transition-[background-color,box-shadow] duration-200 ease-out",
                "hover:bg-amber-400",
                "focus-visible:outline-none",
                "focus:ring-2 focus:ring-amber-300 focus:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                className,
            )}
            {...props}
        >
            {icon && <span className="flex items-center justify-center">{icon}</span>}

            <span>{children}</span>
        </button>
    );
};

export default Button;
