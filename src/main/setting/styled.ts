import styled from 'styled-components';

export const Container = styled.section`
    background-color: white;
    width: 320px;

    @media (max-width: 576px) {
        margin-bottom: 260px;
    }
`;

export const ContainerImage = styled.div`
    .image-profile {
        width: 100px;
        height: 100px;
        border: 2px solid black;
        border-radius: 50%;
    }

    .avatar {
        font-size: 40px;
    }
`;

export const ContainerFile = styled.div`
    position: relative;

    .input {
        position: relative;
        opacity: 0;
        z-index: 1;
        cursor: pointer;
    }

    .upload {
        position: absolute;
        z-index: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;