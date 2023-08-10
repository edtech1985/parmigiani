import React, { useState, useEffect, useContext } from "react";
import {
  AddToCartIcon,
  ProductContainer,
  ProductImage,
  ProductModal,
  ProductName,
  ColumnTitle,
  ProductPrice,
} from "./Products";

import { CartContext } from "../../components/CartContext/index";

import productsData from "../../db/products.json";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { handleAddToCart } = useContext(CartContext);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <ProductContainer>
        <ColumnTitle width="30%">Nome</ColumnTitle>
        <ColumnTitle width="30%">Valor</ColumnTitle>
        <ColumnTitle width="30%">Adicionar</ColumnTitle>
      </ProductContainer>
      {productsData.ProductsList.map((product) => (
        <ProductContainer key={product.id}>
          <ProductName onClick={() => openModal(product)}>
            {product.name}
          </ProductName>
          <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
          <AddToCartIcon onClick={() => handleAddToCart(product)} />{" "}
          {/* Adicione esta linha */}
        </ProductContainer>
      ))}
      {selectedProduct && (
        <ProductModal
          showModal={selectedProduct !== null}
          onClick={handleOutsideClick}
        >
          <ProductImage
            src={selectedProduct.image_url}
            alt={selectedProduct.name}
          />
          <button onClick={closeModal}>Fechar</button>
        </ProductModal>
      )}
    </div>
  );
}
