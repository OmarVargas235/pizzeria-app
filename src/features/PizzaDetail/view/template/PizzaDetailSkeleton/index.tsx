// 1.- libraries

// 2.- components
import Skeleton from "@shared/components/atoms/Skeleton";

const PizzaDetailSkeleton = () => {
    return (
        <>
            <div>
                <div className="flex justify-end w-full mb-6 pr-2.5">
                    <Skeleton className="w-7 h-7 rounded-md" />
                </div>
                <div className="w-[300px] h-[350px] rounded-[15px] bg-white dark:bg-[#1F1F23] border border-gray-200 dark:border-[#2A2A32] shadow-xl">
                    <div className="flex flex-col items-center p-6 h-full">
                        <div className="relative w-[220px] h-[220px] rounded-full bg-gray-200 dark:bg-[#2A2A32] flex items-center justify-center">
                            <Skeleton className="absolute top-1.5 w-[120px] h-[120px] rounded-sm bg-gray-400" />
                            <div className="flex flex-col items-center">
                                <Skeleton className="mt-28 w-32 h-5 bg-gray-400" />
                                <Skeleton className="mt-2 w-20 h-4 bg-gray-400" />
                            </div>
                        </div>
                        <Skeleton className="mt-4 w-full h-7" />
                        <div className="mt-auto flex gap-4 mt-4">
                            <Skeleton className="w-5 h-5 rounded-sm" />
                            <Skeleton className="w-5 h-5 rounded-sm" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 max-h-[200px] overflow-y-auto">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 bg-white dark:bg-[#2A2A32] border border-transparent dark:border-[#3A3A45] rounded-xl p-3"
                    >
                        <Skeleton className="w-12 h-12 rounded-lg" />

                        <div className="flex flex-col gap-2 w-full">
                            <Skeleton className="w-3/4 h-4" />
                            <Skeleton className="w-1/2 h-3" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PizzaDetailSkeleton;
