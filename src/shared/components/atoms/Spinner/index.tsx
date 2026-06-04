// 1.- utils
import { Theme } from "@shared/types/ui.store";
import { classNames } from "@shared/utils";

type SpinnerProps = {
    theme: Theme;
};

const Spinner = ({ theme }: SpinnerProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div role="status">
                <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(
                        "w-10",
                        theme === "dark" ? "fill-lavender-600" : "fill-amber-500",
                    )}
                >
                    <path
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        opacity=".25"
                    />
                    <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            dur="0.75s"
                            values="0 12 12;360 12 12"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>

                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
