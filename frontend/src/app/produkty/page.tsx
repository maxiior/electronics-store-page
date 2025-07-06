"use client";

import Products from "../components/shared/Products";
import { fetchAllProducts } from "@/app/api/produkty";
import { useEffect, useState } from "react";
import { ItemInterface } from "@/app/types/produkty/Item";

const Produkty = () => {
  const [products, setProducts] = useState<ItemInterface[]>([]);

  useEffect(() => {
    fetchAllProducts()
      .then((e) => setProducts(e.data))
      .catch(console.error);
  }, []);

  return (
    <section className="py-[100px]">
      <div className="container max-w-7xl mx-auto py-10 px-10 2xl:px-0">
        <h1 className="text-white text-3xl font-bold mb-10">Nasze produkty</h1>
        <Products full={true} data={products} />
      </div>
    </section>
  );
};

export default Produkty;
