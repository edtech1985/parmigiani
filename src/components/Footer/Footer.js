import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--dark);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  max-height: 10vh;
  height: 10vh;

  @media only screen and (max-width: 600px) {
    padding-top: 35px;
    padding-bottom: 35px;
    justify-content: center;
    flex-direction: column;
    height: auto; /* Remover a altura fixa para acomodar os textos em linhas separadas */
  }
`;

export const StyledIconList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StyledIconItem = styled.li`
  margin-left: 1vw;
  list-style-type: none;
  font-size: 2vw;
  cursor: pointer;
  color: ${(props) => props.color || "inherit"};
  &:hover {
    color: var(--yellow);
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const StyledRightsReserved = styled.p`
  font-size: 1.25vw;
  margin-bottom: 0.5vw;
  cursor: pointer;
  span {
    color: var(--green);
    &:hover {
      color: var(--yellow);
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    margin-bottom: 5px;
  }
`;

export const StyledDevelopedBy = styled.p`
  margin-right: 1vw;
  font-size: 1.25vw;
  cursor: pointer;
  a {
    text-decoration: none;
  }
  span {
    color: var(--red);
    &:hover {
      color: var(--yellow);
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;
