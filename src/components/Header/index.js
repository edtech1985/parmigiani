import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledNavItem,
  StyledCartIcon,
  StyledCartDiv,
  StyledCartCount,
  BurgerMenuButton,
} from "./Header";
import logo from "../../img/logo.png";
import { CartContext } from "../CartContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useContext(CartContext);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="Logo da loja" />
      </Link>

      <BurgerMenuButton
        id="BurgerButtonMenu"
        open={isOpen}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenuButton>

      <StyledNavbar open={isOpen}>
        <StyledNavItem
          as={NavLink}
          to="/"
          exact
          onClick={handleNavItemClick}
          aria-label="link para home"
        >
          Home
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/products"
          onClick={handleNavItemClick}
          aria-label="link para produtos"
        >
          Todos os Produtos
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/acougue"
          onClick={handleNavItemClick}
          aria-label="link para açougue"
        >
          Açougue
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/padaria"
          onClick={handleNavItemClick}
          aria-label="link para padaria"
        >
          Padaria
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/bebidas"
          onClick={handleNavItemClick}
          aria-label="link para bebidas"
        >
          Bebidas
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/higiene"
          onClick={handleNavItemClick}
          aria-label="link para higiêne"
        >
          Higiêne
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/checkout"
          onClick={handleNavItemClick}
          aria-label="link para checkout"
        >
          Carrinho
        </StyledNavItem>
      </StyledNavbar>

      <StyledCartDiv>
        <Link to="/checkout">
          <StyledCartIcon>
            <FaShoppingCart />
            <StyledCartCount>{cartCount}</StyledCartCount>
          </StyledCartIcon>
        </Link>
      </StyledCartDiv>
    </StyledHeader>
  );
}

export default Header;
