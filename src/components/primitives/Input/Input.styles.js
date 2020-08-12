import styled from "styled-components";

export const InputInnerWrapper = styled.input`
    border: none;
    border-radius: 3px;
    font-size: 16px;
    color: #ffffff;
    width: 570px;
    padding: 14px;
    background-color: #272727b7;  

    &:focus {
        outline: 1px solid #232323;
        border: none;
        color: #ffffff;
    }

    ${props => {
        if (props.fullWidth) {
          return `
            width: 100%;
          `;
        }
    }}
`;