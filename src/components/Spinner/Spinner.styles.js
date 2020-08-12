import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #00000077;
  transition: opacity 0.5s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerLoader = styled.div`
  border: 50px solid #F65261;
  border-top: 50px solid #272727b7;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  animation: spin 0.5s linear infinite;
`;
