type ObjectFit = "cover" | "contain" | "fill";

export interface ImageProps extends React.ComponentProps<"img"> {
    src: string;
    alt: string;
    priority?: boolean;
    objectFit?: ObjectFit;
}
