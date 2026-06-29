// 1.- libraries

// 2.- components
import Skeleton from "@shared/components/atoms/Skeleton";

const ITEMS = 10;

const PizzeriasSkeleton = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: ITEMS }).map((_, index) => (
                <div key={index} className="text-center">
                    <Skeleton className="h-32 w-full rounded-lg mb-2" />
                    <Skeleton className="h-4 w-20 mx-auto rounded" />
                </div>
            ))}
        </div>
    );
};

export default PizzeriasSkeleton;
