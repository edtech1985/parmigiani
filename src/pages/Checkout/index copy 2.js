import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CheckoutButton,
  CheckoutContainer,
  CheckoutSummary,
  CheckoutSummaryText,
  CheckoutSummaryValue,
  CheckoutTable,
  CheckoutTableData,
  CheckoutTableDataName,
  CheckoutTableDataPrice,
  CheckoutTableDataQuantity,
  CheckoutTableHead,
  CheckoutTableRow,
  MinusButton,
  PlusButton,
  QuantityButtons,
  RemoveButton,
} from "./Checkout";
import { CartContext } from "../CartContext"; // Importe o contexto do carrinho

function Checkout() {
  const { cartItems, updateItemQuantity, removeItem, getTotalPrice } =
    useContext(CartContext); // Utilize o contexto do carrinho

  return (
    <CheckoutContainer>
      <CheckoutTable>
        {/* O restante do código permanece o mesmo */}
      </CheckoutTable>
      <CheckoutSummary>
        <CheckoutSummaryText>Total:</CheckoutSummaryText>
        <CheckoutSummaryValue>{`R$ ${getTotalPrice().toFixed(
          2
        )}`}</CheckoutSummaryValue>
      </CheckoutSummary>
      <Link
        to={`https://wa.me/5551993358455?text=${encodeURIComponent(
          `Olá, Pump Crazy Cookies! Escolhi os seguintes itens: ${cartItems
            .map((item) => `${item.quantity} ${item.name}`)
            .join(", ")}, total R$ ${getTotalPrice().toFixed(2)}`
        )}. Qual o valor da entrega para meu endereço?`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CheckoutButton>Checkout</CheckoutButton>
      </Link>
    </CheckoutContainer>
  );
}

export default Checkout;
