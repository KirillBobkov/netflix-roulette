import styled from "styled-components";

export const NotFound = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../../assets/images/headerBackground.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NotFoundMessage = styled.div`
    padding: 50px;
    font-family: 'Monseratt-Bold', serif;
    color: #F65261;
    font-size: 36px;
    line-height: 36px;
    text-transform: uppercase;
    box-shadow: 0 0 30px rgba(255, 113, 113, 0.7);
`;