import React, { useState, useEffect, useContext } from "react";
import {
  AddToCartIcon,
  ProductContainer,
  ProductImage,
  ProductModal,
  ProductName,
  ColumnTitle,
  ProductPrice,
  SearchInput,
  SearchInputContainer,
  SearchIcon,
} from "./Hygiene";
import { CartContext } from "../../components/CartContext/index";
import productsData from "../../db/products.json";
import removeAccents from "remove-accents";

export default function Hygiene() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext);

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

  const filteredProducts = productsData.ProductsList.filter((product) =>
    removeAccents(product.name.toLowerCase()).includes(
      removeAccents(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <SearchInputContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></SearchInput>
        <SearchIcon />
      </SearchInputContainer>

      <ProductContainer>
        <ColumnTitle>Nome</ColumnTitle>
        <ColumnTitle>Valor</ColumnTitle>
        <ColumnTitle>Adicionar</ColumnTitle>
      </ProductContainer>
      {filteredProducts.map((product) => (
        <ProductContainer key={product.id}>
          <ProductName onClick={() => openModal(product)}>
            {product.name}
          </ProductName>
          <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
          <AddToCartIcon onClick={() => addToCart(product)} />
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
