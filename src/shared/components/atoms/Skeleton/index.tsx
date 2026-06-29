import { ComponentProps } from "react";
import { classNames } from "@shared/utils";

type SkeletonProps = ComponentProps<"div">;

const Skeleton = ({ className = "", ...props }: SkeletonProps) => (
    <div
        className={classNames(
            "animate-pulse rounded-md",
            "bg-gray-200 dark:bg-[#2A2A32]",
            className,
        )}
        {...props}
    />
);

export default Skeleton;
