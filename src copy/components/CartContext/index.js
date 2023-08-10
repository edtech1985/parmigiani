import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    localStorage.setItem("cartItems", JSON.stringify([...cartItems, product]));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateCartItemQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
