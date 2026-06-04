// 1.- libraries
import { JSX, useState } from "react";

// 2.- interfaces
import { ImageProps } from "./types";

const Image = ({
    src,
    alt,
    width,
    height,
    className = "",
    priority = false,
    style = {},
    id = "",
    onClick,
    objectFit = "cover",
}: ImageProps): JSX.Element => {
    const [loaded, setLoaded] = useState<boolean>(priority);

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onClick={onClick}
            data-testid={id ? `image-${id}` : undefined}
            className={className}
            style={{
                objectFit,
                display: "block",
                filter: loaded ? "none" : "blur(6px)",
                // transform: loaded ? "scale(1)" : "scale(1.02)",
                transition: "filter 300ms ease, transform 300ms ease",
                willChange: loaded ? "auto" : "transform",
                ...style,
            }}
        />
    );
};

export default Image;
