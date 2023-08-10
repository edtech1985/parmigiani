import React, { useContext } from "react";
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
import { CartContext } from "../../components/CartContext"; // Verifique o caminho correto para o seu contexto

function Checkout() {
  const { cartItems, updateCartItemQuantity, removeFromCart } =
    useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CheckoutContainer>
      <CheckoutTable>
        <CheckoutTableHead>
          <CheckoutTableDataName>Product</CheckoutTableDataName>
          <CheckoutTableDataPrice>Price</CheckoutTableDataPrice>
          <CheckoutTableDataQuantity>Quantity</CheckoutTableDataQuantity>
          <CheckoutTableData>Total</CheckoutTableData>
          <CheckoutTableData>Actions</CheckoutTableData>
        </CheckoutTableHead>
        <tbody>
          {cartItems.map((item) => (
            <CheckoutTableRow key={item.id}>
              <CheckoutTableDataName>{item.name}</CheckoutTableDataName>
              <CheckoutTableDataPrice>{`R$ ${item.price.toFixed(
                2
              )}`}</CheckoutTableDataPrice>
              <CheckoutTableDataQuantity>
                <QuantityButtons>
                  <MinusButton
                    onClick={() =>
                      updateCartItemQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </MinusButton>
                  <CheckoutTableDataQuantity>
                    {item.quantity}
                  </CheckoutTableDataQuantity>
                  <PlusButton
                    onClick={() =>
                      updateCartItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </PlusButton>
                </QuantityButtons>
              </CheckoutTableDataQuantity>
              <CheckoutTableData>{`R$ ${(item.price * item.quantity).toFixed(
                2
              )}`}</CheckoutTableData>
              <CheckoutTableData>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  Remove
                </RemoveButton>
              </CheckoutTableData>
            </CheckoutTableRow>
          ))}
        </tbody>
      </CheckoutTable>
      <CheckoutSummary>
        <CheckoutSummaryText>Total:</CheckoutSummaryText>
        <CheckoutSummaryValue>{`R$ ${getTotalPrice().toFixed(
          2
        )}`}</CheckoutSummaryValue>
      </CheckoutSummary>
      <a
        href={`https://wa.me/5551993358455?text=${encodeURIComponent(
          `Olá, Parmigiani! Escolhi os seguintes itens: ${cartItems
            .map((item) => `${item.quantity} ${item.name}`)
            .join(", ")}, total R$ ${getTotalPrice().toFixed(2)}`
        )}. Qual o valor da entrega para meu endereço?`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CheckoutButton>Checkout</CheckoutButton>
      </a>
    </CheckoutContainer>
  );
}

export default Checkout;
