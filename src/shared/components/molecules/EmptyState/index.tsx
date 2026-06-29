// 1.- libraries
import { ReactNode } from "react";

// 2.- components
import Button from "@shared/components/atoms/Button";

type EmptyStateProps = {
    icon?: ReactNode;
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
};

const EmptyState = ({ icon, title, description, actionLabel, onAction }: EmptyStateProps) => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
            {icon && <div className="mb-5">{icon}</div>}
            <h2 className="text-lg font-semibold text-gray-900 dark:text-slate-100">{title}</h2>
            {description && (
                <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-slate-400">
                    {description}
                </p>
            )}
            {actionLabel && onAction && (
                <Button className="mt-6" onClick={onAction}>
                    {actionLabel}
                </Button>
            )}
        </div>
    );
};

export default EmptyState;
