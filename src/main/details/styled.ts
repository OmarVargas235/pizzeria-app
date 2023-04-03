import styled from "styled-components";

export const Container = styled.div`
    
`;

export const ContainerCard = styled.div`
    width: 300px;
    border-radius: 15px;
    -webkit-box-shadow: 0px -1px 45px -3px rgba(0,0,0,0.58);
    -moz-box-shadow: 0px -1px 45px -3px rgba(0,0,0,0.58);
    box-shadow: 0px -1px 45px -3px rgba(0,0,0,0.58);
`;

export const ContainerImg = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: #FFD970;
    

    .container-img {
        width: 150px;
        height: 150px;
        position: relative;
        top: -10px;
    }
`;

export const ListView = styled.div`
    height: 109px;
    overflow-y: auto;

    .img-logo {
        height: 100%;
    }
`;

export const ContainerCardPizza = styled.div`
    div {
        -webkit-box-shadow: 1px 0px 9px -2px rgba(0,0,0,0.3);
        -moz-box-shadow: 1px 0px 9px -2px rgba(0,0,0,0.3);
        box-shadow: 1px 0px 9px -2px rgba(0,0,0,0.3);
        border-radius: 4px;
        height: 80px;
        background-color: #FFD970;
    }
`;