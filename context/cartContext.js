"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // charger le panier depuis localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) return;

    const data = JSON.parse(savedCart);

    const now = Date.now();
    const expirationTime = 24 * 60 * 60 * 1000; // 24h en ms

    if (now - data.timestamp > expirationTime) {
      // panier expiré
      localStorage.removeItem("cart");
      return;
    }

    setCart(data.cart);
  }, []);

  // sauvegarder le panier à chaque changement
  // sauvegarder le panier à chaque changement
  useEffect(() => {
    const data = {
      cart,
      timestamp: Date.now(),
    };

    localStorage.setItem("cart", JSON.stringify(data));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // ajoute la quantité choisie
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item,
        );
      } else {
        return [
          ...prev,
          { ...product, qty: quantity, price: Number(product.priceStripe) },
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartItemQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item)),
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItemQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
