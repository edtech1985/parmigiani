import styled from "styled-components";
// import backgroundImage from "./backgroundImage";
import backgroundImage from "../../img/store.jpg";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  max-height: 80vh;
  width: 100vw;
  overflow: auto;

  @media only screen and (max-width: 600px) {
    height: auto;
    max-height: 77vh;
    width: 100%;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;
  opacity: 0.25;
  z-index: -10;
`;

export const StyledContent = styled.div`
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 2.25vw;
  margin-top: 1vw;
  margin-bottom: 1.5vw;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: 0.5vw;
    width: 100%;
  }
`;

export const StyledP = styled.p`
  font-size: 1.35vw;
  text-align: center;
  width: 90vw;
  margin-bottom: 1vw;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.1);
    z-index: -1;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
  }
`;
