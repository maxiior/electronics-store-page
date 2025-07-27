"use client";

import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { ItemInterface } from "@/app/types/produkty/Item";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useProductsTheme } from "@/app/context/ProductsContext";
import { getStrapiMedia } from "@/app/api/utils";
import { useCartTheme } from "@/app/context/CartContext";

const Produkt = () => {
  const [productNotFound, setProductNotFound] = useState(false);
  const { addToCart, removeFromCart, checkIfInCart } = useCartTheme();

  const { products } = useProductsTheme();
  const params = useParams();
  const id = Number(params.id);
  const [selectedProduct, setSelectedProduct] = useState<ItemInterface>({
    id: 0,
    title: "",
    preTitle: "",
    quickDescription: "",
    fullDescription: "",
    price: 0,
    urlBuyNow: "",
    bestseller: false,
    mainImage: {
      url: "",
    },
    order: 0,
    guarantee: 0,
    urlInstruction: "",
    vat: 0,
    weight: 0,
  });

  const isInCart = checkIfInCart(selectedProduct.id);

  const getObjectById = (array: ItemInterface[], id: number) => {
    return array.find((i) => i.id === id);
  };

  useEffect(() => {
    if (products && products.length > 0 && !isNaN(id)) {
      const product = getObjectById(products, id);
      if (product) {
        setSelectedProduct(product);
        setProductNotFound(false);
      } else setProductNotFound(true);
    }
  }, [products, id]);

  const imageUrl = getStrapiMedia(selectedProduct.mainImage.url);

  return (
    <section className="py-[100px]">
      {productNotFound === false ? (
        <article className="container max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full aspect-[4/3]">
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-full rounded-3xl block"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div>
              <div className="text-3xl text-white font-bold">
                {selectedProduct.preTitle}
              </div>
              <div className="text-5xl text-main font-bold">
                {selectedProduct.title}
              </div>
            </div>
            <div className="w-150 text-white text-sm font-medium">
              {selectedProduct.fullDescription?.split("\n").map((line, idx) => (
                <p key={idx} className="mt-5">
                  {line}
                </p>
              ))}
            </div>
            <div>
              <div className="flex">
                <div className="text-main">Gwarancja :</div>
                <div className="text-white ml-2">
                  {selectedProduct.guarantee} miesięce
                </div>
              </div>
              <div className="flex mt-2">
                <div className="text-main">Waga :</div>
                <div className="text-white ml-2">
                  {selectedProduct.weight} gramów
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                className="text-white bg-main text-left px-8 py-2 rounded-3xl font-nunito cursor-pointer flex items-center transition duration-200 hover:scale-105"
                href={selectedProduct.urlBuyNow}
              >
                <div>
                  <div className="font-bold">KUP TERAZ</div>
                  <div className="text-xs mt-[-5]">
                    {Number(selectedProduct.price).toFixed(2)} PLN{" "}
                    {selectedProduct.vat !== null &&
                      selectedProduct.vat !== undefined &&
                      `(${selectedProduct.vat}% VAT)`}
                  </div>
                </div>
                <ChevronDoubleRightIcon className="w-8 h-8 ml-10" />
              </Link>
              {isInCart ? (
                <button
                  onClick={() => removeFromCart(selectedProduct.id)}
                  className="w-13 h-13 bg-gray-400 rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 cursor-pointer"
                >
                  <BsFillCartDashFill />
                </button>
              ) : (
                <button
                  onClick={() => addToCart(selectedProduct.id)}
                  className="w-13 h-13 bg-main rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 cursor-pointer"
                >
                  <BsFillCartPlusFill className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </article>
      ) : (
        <div className="text-white">Produkt nie został znaleziony</div>
      )}
    </section>
  );
};

export default Produkt;
