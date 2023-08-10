import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.25rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  width: 95vw;
`;

export const ColumnTitle = styled.span`
  font-weight: bold;
  flex: 1;
  text-align: left;
  width: ${(props) => props.width};
`;

export const ProductName = styled.span`
  cursor: pointer;
  width: 30%;
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
