// 1.- libraries
import { ReactNode } from "react";

// 2.- components
import QueryError from "./QueryError";

type QueryBoundaryProps = {
    loading: boolean;
    error: boolean;
    loadingFallback?: ReactNode;
    onRetry?: () => void;
    children: ReactNode;
};

const QueryBoundary = ({
    loading,
    error,
    loadingFallback,
    onRetry,
    children,
}: QueryBoundaryProps) => {
    if (loading) {
        return <>{loadingFallback ?? null}</>;
    }
    if (error) {
        return <QueryError onRetry={onRetry} />;
    }
    return <>{children}</>;
};

export default QueryBoundary;
