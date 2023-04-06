import styled from "styled-components";

export const Container = styled.section`
    .container-img-reset-password {
        width: 280px;
        height: 100px;
    }

    @media (max-width: 576px) {
        position: relative;
        bottom: 70px;
    }

    .container-form {
        -webkit-box-shadow: 10px -12px 67px -14px rgba(0,0,0,0.62);
        -moz-box-shadow: 10px -12px 67px -14px rgba(0,0,0,0.62);
        box-shadow: 10px -12px 67px -14px rgba(0,0,0,0.62);
        border-radius: 20px;
    }
`;