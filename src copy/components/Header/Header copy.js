import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  background-color: var(--dark);
  width: 100vw;
  max-height: 12vh;
  height: 12vh;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  box-sizing: border-box;
`;

export const StyledLogo = styled.img`
  width: 10vh;
  height: 10vh;
  min-width: 48px;
  min-height: 48px;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--dark);
    width: 100%;
    height: 110vh;
    padding-top: 0; /* Ajuste do espaço para o menu */
    z-index: 999;
  }
`;

export const StyledNavItem = styled(NavLink)`
  display: block;
  padding: 1vw;
  color: var(--white);
  text-decoration: none;
  font-size: 2vw;
  &:hover {
    color: var(--red);
  }
  &.active {
    color: var(--green);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 999;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 100%;
      height: 2px;
      margin-bottom: 6px;
      position: relative;
      /* background-color: var(--green); */
      border-radius: 2px;
      transform-origin: center;
      transition: transform 0.4s ease-out, opacity 0.4s ease-out;

      &:focus {
        outline: none;
      }

      &:first-child {
        background-color: var(--green);
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        background-color: var(--white);
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        background-color: var(--red);
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const StyledCartDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 600px) {
    display: contents;
  }
`;

export const StyledCart = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const StyledCartIcon = styled.div`
  width: 5vh;
  height: 6vh;
  color: var(--green);
  background-color: var(--white);
  border-radius: 50%;
  margin-right: 0.75vw;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25vw;
  &:hover {
    color: var(--red);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const StyledCartCount = styled.div`
  margin-left: 0.25vw;
  font-weight: bold;
  font-size: 1.25vw;
  color: var(--green);
  &:hover {
    color: var(--red);
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
