import styled from "styled-components";

export const ButtonInnerWrapper = styled.button`
  color: #ffffff;
  border: none;
  outline: 1px solid transparent;
  text-transform: uppercase;
  padding: 6px 17px;
  background-color: #272727b7; 
  transition: all 0.5s ease-out; 
  cursor: pointer;

  ${props => {
    if (props.reset) {
      return `
          position: absolute;
          top: 9px;
          right: 205px;
          padding: 6px;
      `;
    }
  }}

  ${props => {
    if (props.search) {
      return `
        border-radius: 3px;
        background: #F65261;
        padding: 15px 15px 13px;
        width: 188px;
        margin-left: 10px;
        font-size: 16px;
        line-height: 16px;

        &:active {
            background-color: #272727b7; 
        }
      `;
    }
  }}

  ${props => {
    if (props.choosen) {
      return `
        background: #F65261;
        padding: 6px 17px;
      `;
    }
  }}

  ${props => {
    if (props.leftBorder) {
      return `
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      `;
    }
  }}

  ${props => {
    if (props.rightBorder) {
      return `
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      `;
    }
  }}

  ${props => {
    if (props.searchIcon) {
      return `
        position: absolute;
        top: 10px;
        right: 17px;
        display: block;
        width: 20px;
        height: 20px;
        padding: 0;
        border-radius: 20px;
        border: 4px solid #F65261;
        background-size: cover;
        background-color: transparent;  

        &:after {
            position: absolute;
            top: 14px;
            right: -9px;
            content: '';
            display: inline-block;
            width: 10px;
            height: 4px;
            background: #F65261;
            transform: rotate(45deg);
        }
      `;
    }
  }}
`;