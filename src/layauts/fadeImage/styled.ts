import styled from "styled-components";

export const Container = styled.div<{ height: string; }>`
    width: 100%;
    height: ${props => props.height};
    position: relative;

    &.overflow-hidden {
        overflow: hidden;
    }
`;

export const Img = styled.img`
    width: 100%;
    position: absolute;

   &.img-static {
        opacity: 1;
        animation: fade-image .6s ease-in-out forwards;
    }

    @keyframes fade-image {
        0% { opacity: 1; }
        50% { opacity: .5; }
        100% { opacity: 0; }
    }

    &.img {
        opacity: 0;
    }

    &.img-animation {
        animation: into-image .6s ease-in-out forwards;
    }

    @keyframes into-image {
        0% { opacity: 0; }
        50% { opacity: .5; }
        100% { opacity: 1; }
    }
`;