"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ItemInterface } from "../types/produkty/Item";
import { fetchAllProducts } from "@/app/api/produkty";

interface ProductsContextType {
  products: ItemInterface[];
  pending: boolean;
  error: boolean;
  getProductById: (id: number) => ItemInterface | undefined;
}

const ThemeContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<ItemInterface[]>([]);
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchAllProducts()
      .then((e) => {
        setProducts(e.data);
        setPending(false);
      })
      .catch((e) => {
        console.error(e);
        setPending(false);
        setError(true);
      });
  }, []);

  const getProductById = (id: number): ItemInterface | undefined => {
    return products.find((product) => product.id === id);
  };

  return (
    <ThemeContext.Provider value={{ products, pending, error, getProductById }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useProductsTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useProductsTheme must be used within a ProductsContext");
  }

  return context;
}
