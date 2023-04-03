import styled from "styled-components";

export const Container = styled.div<{ height: string; }>`
    overflow: hidden;
    width: 100%;
    height: ${props => props.height};
    position: relative;
`;

export const Img = styled.img`
    width: 100%;
    position: absolute;

   &.img-static {
        opacity: 1;
        animation: fade .6s ease-in-out forwards;
    }

    @keyframes fade {
        0% { opacity: 1; }
        50% { opacity: .5; }
        100% { opacity: 0; }
    }

    &.img {
        opacity: 0;
    }

    &.img-animation {
        animation: into .6s ease-in-out forwards;
    }

    @keyframes into {
        0% { opacity: 0; }
        50% { opacity: .5; }
        100% { opacity: 1; }
    }
`;