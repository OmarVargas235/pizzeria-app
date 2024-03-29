import styled from "styled-components";
import { mediaQueryListView } from "../../helpers/utils";

export const Container = styled.div``;

export const Perspective = styled.aside`
    perspective: 1000px;
    
    .container-animation, p {
        transition: transform .3s ease-in-out;
    }

    &:hover {
        .container-animation, p {
            transform: translateZ(60px);
        }
    }
`;

export const ContainerCard = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    -webkit-box-shadow: 0px -1px 45px -3px rgba(0,0,0,0.58);
    -moz-box-shadow: 0px -1px 45px -3px rgba(0,0,0,0.58);
    box-shadow: 0px -1px 45px -3px rgba(0,0,0,0.58);
    background-color: ${props => props.theme.bg.bg3};
    transform-style: preserve-3d;
    transition: transform .1s ease-in;
`;

export const ContainerImg = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: ${props => props.theme.primary};
    position: relative;
    transform-style: preserve-3d;
    
    .container-img {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 0px;
    }
`;

export const ListView = styled.div`
    height: 109px;
    overflow-y: auto;

    .img-logo {
        height: 100%;
    }

    ${mediaQueryListView()};
`;

export const ContainerCardPizza = styled.div`
    div {
        -webkit-box-shadow: 1px 0px 9px -2px rgba(0,0,0,0.3);
        -moz-box-shadow: 1px 0px 9px -2px rgba(0,0,0,0.3);
        box-shadow: 1px 0px 9px -2px rgba(0,0,0,0.3);
        border-radius: 4px;
        height: 80px;
        background-color: ${props => props.theme.primary};
    }

    @media (max-width: 576px) {
        &.col-12 {
            -webkit-box-flex: 0 !important;
            -ms-flex: 0 0 50% !important;
            flex: 0 0 50% !important;
            max-width: 50% !important;
        }
    }

    @media (max-width: 425px) {
        &.col-12 {
            -webkit-box-flex: 0 !important;
            -ms-flex: 0 0 100% !important;
            flex: 0 0 100% !important;
            max-width: 100% !important;
        }
    }
`;