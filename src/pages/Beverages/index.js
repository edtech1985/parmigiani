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
  FixedHeaderContainer,
} from "./Beverages";
import { CartContext } from "../../components/CartContext/index";
import productsData from "../../db/products.json";
import removeAccents from "remove-accents";

export default function Beverages() {
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

  const beveragesProducts = filteredProducts.filter(
    (product) => product.group === "BEBIDAS"
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

      <FixedHeaderContainer>
        <ProductContainer>
          <ColumnTitle align="left" width="50vw">
            Nome
          </ColumnTitle>
          <ColumnTitle align="center" width="20vw">
            Valor
          </ColumnTitle>
          <ColumnTitle align="right" width="15vw">
            Adicionar
          </ColumnTitle>
        </ProductContainer>
      </FixedHeaderContainer>
      {beveragesProducts.map((product) => (
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
