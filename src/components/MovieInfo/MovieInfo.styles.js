import styled from "styled-components";

export const HeaderMovieWrapper = styled.div`
    display: flex;
    width: 865px;
    margin: 0 auto;
    margin-bottom: 50px;
`;

export const HeaderMoviePoster = styled.p`
    width: 260px;
    height: 365px;
`;

export const HeaderMovieTitle = styled.h1`
    display: inline-block;
    position: relative;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 22px;
    color: #ffffff;
    font-family: 'Montserrat-Light';
`;

export const HeaderMovieNomination = styled.p`
    display: block;
    font-size: 11px;
    margin-bottom: 17px;
    color: #8f8f8f;
`;

export const HeaderMovieInfo = styled.div`
    padding: 40px;
    width: 605px;
    height: 365px;
`;

export const HeaderMovieRating = styled.span`
    display: inline-block;
    position: absolute;
    top: -8px;
    right: -67px;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    min-width: 50px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    color: #a1e66f;
`;

export const HeaderMovieYear= styled.span`
    display: inline-block;
    font-size: 20px;
    color: #f65261;
`;

export const HeaderMovieLength= styled.span`
    display: inline-block;
    font-size: 20px;
    color: #f65261;
`;

export const HeaderMovieDetails = styled.p`
    margin-bottom: 20px;
`;

export const HeaderMovieDescription = styled.p`
    font-size: 13px;
    line-height: 15px;
    margin-bottom: 17px;
`;