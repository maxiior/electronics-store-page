"use client";

import Link from "next/link";
import Hero from "./components/home/Hero";
import Products from "./components/shared/Products";
import { fetchAllProducts } from "@/app/api/produkty";
import { useEffect, useState } from "react";
import { ItemInterface } from "@/app/types/produkty/Item";

export default function Home() {
  const [products, setProducts] = useState<ItemInterface[]>([]);

  useEffect(() => {
    fetchAllProducts()
      .then((e) => setProducts(e.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Hero data={products} />
      <section className="container max-w-7xl mx-auto py-10 px-10 2xl:px-0">
        <div className="flex mb-10 items-center gap-5">
          <h1 className="text-white text-3xl font-bold">Nasze produkty</h1>
          <Link
            className="text-white px-3 py-1 text-xs bg-main rounded-2xl cursor-pointer font-semibold flex items-center transition duration-200 hover:scale-105"
            href="/produkty"
          >
            Zobacz wszystkie
          </Link>
        </div>
        <Products full={false} data={products} />
      </section>
    </div>
  );
}
