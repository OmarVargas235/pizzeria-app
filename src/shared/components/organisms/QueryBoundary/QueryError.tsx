// 1.- icons
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// 2.- components
import Button from "@shared/components/atoms/Button";

// 3.- i18n
import { locale } from "@shared/i18n";

type QueryErrorProps = {
    onRetry: (() => void) | undefined;
};

const QueryError = ({ onRetry }: QueryErrorProps) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <ExclamationTriangleIcon className="w-16 h-16 text-amber-500 mb-6" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-slate-100">
                {locale.common.messages.queryErrorTitle}
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-500 dark:text-slate-400">
                {locale.common.messages.queryErrorDescription}
            </p>
            {onRetry && (
                <Button className="mt-8" onClick={onRetry}>
                    {locale.common.buttons.retry}
                </Button>
            )}
        </div>
    );
};

export default QueryError;
