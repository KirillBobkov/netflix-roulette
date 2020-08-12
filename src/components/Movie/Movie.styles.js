import styled from "styled-components";

export const MovieItem = styled.li`
    margin-bottom: 40px;
    width: 260px;
    margin-right: 43px;

    &:nth-child(3n) {
        margin-right: 0px;
    }
`;

export const MoviePoster = styled.p`
    width: 260px;
    height: 365px;
    margin-bottom: 17px;
`;

export const MovieTitle = styled.span`
    display: block;
    font-size: 14px;
    margin-bottom: 10px;  
    width: 205px;  
`;

export const MovieDescription = styled.p`
    position: relative;
`;

export const MovieGenre = styled.span`
    display: block;
    font-size: 11px;
    color: #8f8f8f;
`;

export const MovieYear = styled.span`
    position: absolute;
    top: 0;
    right: 2px;
    font-size: 10px;
    padding: 4px 13px;
    border: 1px solid #8f8f8f;
    border-radius: 3px;
    color: #8f8f8f;
`;
