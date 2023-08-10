import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(20vw, 1fr));
  grid-gap: 1vw;
  padding: 1vw;
  cursor: pointer;
  box-shadow: 0px 15px 10px -5px rgba(64, 41, 21, 0.8);
  will-change: width, height;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(3, minmax(30vw, 1fr));
    grid-template-rows: repeat(4, minmax(0.5rem, 1fr));
    margin-top: 25px;
  }
`;
