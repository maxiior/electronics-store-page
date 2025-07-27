"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, ItemInterface } from "../types/produkty/Item";

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: number) => void;
  removeFromCart: (itemId: number) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
  checkIfInCart: (itemId: number) => boolean;
  getCartItemCount: () => number;
}

const ThemeContext = createContext<CartContextType | undefined>(undefined);

export const CartContext = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const saveCartToLocalStorage = (cart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (id: number) => {
    const newItem: CartItem = { id, quantity: 1 };
    setCart((prev) => {
      const updated = [...prev, newItem];
      saveCartToLocalStorage(updated);
      return updated;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveCartToLocalStorage(updated);
      return updated;
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      saveCartToLocalStorage(updated);
      return updated;
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) => {
      const updated = prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      saveCartToLocalStorage(updated);
      return updated;
    });
  };

  const checkIfInCart = (id: number): boolean => {
    return cart.some((item) => item.id === id);
  };

  const getCartItemCount = (): number => {
    return cart.length;
  };

  return (
    <ThemeContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        checkIfInCart,
        getCartItemCount,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useCartTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useCartTheme must be used within a CartContext");
  }

  return context;
}
