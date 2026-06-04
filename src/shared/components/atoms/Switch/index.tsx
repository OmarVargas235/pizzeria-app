// 1.- libraries
import { ComponentProps } from "react";

// 2.- icons
import sun from "@assets/icons/sun.svg";
import moon from "@assets/icons/moon.svg";

// 3.- utils
import { classNames } from "@shared/utils";

type SwitchProps = Omit<ComponentProps<"button">, "onChange"> & {
    checked: boolean;
    onChange: (checked: boolean) => void;
};

const Switch = ({ checked, onChange, className = "", ...props }: SwitchProps) => {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className={classNames(
                "relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-200",
                checked ? "bg-amber-400 dark:bg-lavender-400" : "bg-gray-300",
                className,
            )}
            {...props}
        >
            <span
                className={classNames(
                    "inline-flex h-7 w-7 transform items-center justify-center rounded-full bg-white transition-transform duration-200",
                    checked ? "translate-x-8" : "translate-x-0.5",
                )}
            >
                {checked ? (
                    <img src={moon} alt="moon icon" className="h-5 w-5" />
                ) : (
                    <img src={sun} alt="sun icon" className="h-5 w-5" />
                )}
            </span>
        </button>
    );
};

export default Switch;
