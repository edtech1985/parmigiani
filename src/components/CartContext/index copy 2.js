import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ handleAddToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
