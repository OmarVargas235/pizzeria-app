// 1.- libraries
import { JSX, useState } from "react";

// 2.- types
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
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const finalSrc = error ? "https://placehold.co/600x400?text=No+Image" : src;

    return (
        <img
            src={finalSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            onClick={onClick}
            data-testid={id ? `image-${id}` : undefined}
            className={className}
            style={{
                objectFit,
                display: "block",
                filter: loaded ? "none" : "blur(8px) brightness(0.95)",
                transition: "filter 300ms ease, transform 300ms ease",
                willChange: loaded ? "auto" : "transform",
                ...style,
            }}
        />
    );
};

export default Image;
