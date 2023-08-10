import styled from "styled-components";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.25rem;
  padding: 0.25rem;
  border: 1px solid #ccc;
  width: 95vw;
`;

export const SearchInputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 50%;
  padding: 10px 30px 10px 10px;
  margin: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: url(${({ icon }) => icon}) no-repeat right center;
  background-size: 20px;
`;

export const SearchIcon = styled(FaSearch)`
  color: #aaa;
  cursor: pointer;
`;

export const FixedHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  /* position: sticky; */
  top: 0;
  z-index: 1;
`;

export const ColumnTitle = styled.span`
  font-weight: bold;
  flex: 1;
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "20%"};
`;

export const ProductName = styled.span`
  cursor: pointer;
  width: 30%;
  text-align: left;
  &:hover {
    text-decoration: underline;
    color: var(--green);
  }
`;

export const ProductPrice = styled.span`
  cursor: pointer;
  text-align: left;
  width: 30%;
`;

export const AddToCartIcon = styled(FaShoppingCart)`
  cursor: pointer;
  width: 5%;
  &:hover {
    color: var(--green);
  }
`;

export const ProductModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: ${({ showModal }) => (showModal ? "block" : "none")};
`;

export const ProductImage = styled.img`
  width: 15rem;
  height: auto;
  max-height: 50vh;
`;
