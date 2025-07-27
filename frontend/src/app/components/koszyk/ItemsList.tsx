"use client";

import { useMemo } from "react";
import { useCartTheme } from "@/app/context/CartContext";
import { useProductsTheme } from "@/app/context/ProductsContext";
import { getStrapiMedia } from "@/app/api/utils";
import { BsFillCartDashFill } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ItemsList = () => {
  const {
    cart,
    getCartItemCount,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartTheme();
  const { getProductById } = useProductsTheme();

  const totalCost = useMemo(() => {
    return cart.reduce((acc, cartItem) => {
      const product = getProductById(cartItem.id);
      if (!product) return acc;
      return acc + product.price * cartItem.quantity;
    }, 0);
  }, [cart, getProductById]);

  return (
    <div className="py-10">
      {getCartItemCount() == 0 ? (
        <div>
          <div className="text-white text-base">
            Aktualnie Twój koszyk jest pusty.
          </div>
          <Link
            href="/"
            className="text-white bg-main rounded-2xl px-20 py-2 cursor-pointer transition duration-200 hover:scale-105 mt-10 block text-center w-1/3"
          >
            Wróć do zakupów
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-2">
            {cart.map((cartItem) => {
              const item = getProductById(cartItem.id);

              if (item !== undefined) {
                const imageUrl = getStrapiMedia(item.mainImage.url);
                return (
                  <div
                    key={item.id}
                    className="w-full bg-white rounded-xl px-10 py-5 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-6 flex-1">
                      <div className="relative aspect-video rounded-lg overflow-hidden w-[200px]">
                        <Link href={`/produkty/${item.id}`}>
                          {imageUrl && (
                            <Image
                              src={imageUrl}
                              alt=""
                              fill
                              className="object-contain"
                            />
                          )}
                        </Link>
                      </div>
                      <Link href={`/produkty/${item.id}`}>
                        <div className="font-bold text-main text-lg">
                          {item.preTitle}
                        </div>
                        <div className="font-bold text-black text-2xl">
                          {item.title}
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-12 h-12 bg-main rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 cursor-pointer"
                      >
                        <FaPlus />
                      </button>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className={`w-12 h-12 ${
                          cartItem.quantity > 1 ? "bg-main" : "bg-gray-400"
                        } rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 cursor-pointer`}
                      >
                        <FaMinus />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 cursor-pointer"
                      >
                        <BsFillCartDashFill />
                      </button>
                      <div className="min-w-[180px] text-right flex items-center justify-end gap-3">
                        <div className="font-bold text-lg">
                          {Number(cartItem.quantity * item.price).toFixed(2)}{" "}
                          PLN
                        </div>
                        <div className="font-bold text-xs">
                          {cartItem.quantity} SZT.
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="border-t-1 border-white mt-10 py-5">
            <h2 className="text-white text-xl">Podsumowanie</h2>
            <div className="text-white mt-4">
              Łączny koszt zakupów: {Number(totalCost).toFixed(2)} PLN
            </div>
          </div>
          <Link
            href="/"
            className="text-white bg-main rounded-2xl px-20 py-2 cursor-pointer transition duration-200 hover:scale-105 mt-2 block text-center w-1/3"
          >
            Przejdź do płatności
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemsList;
