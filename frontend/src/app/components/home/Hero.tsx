"use client";

import { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import { getStrapiMedia } from "@/app/api/utils";
import { useProductsTheme } from "@/app/context/ProductsContext";
import { useCartTheme } from "@/app/context/CartContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const { products } = useProductsTheme();
  const [activeSlide, setActiveSlide] = useState(0);

  const { addToCart, removeFromCart, checkIfInCart } = useCartTheme();

  const settings = {
    beforeChange: (_: any, next: number) => setActiveSlide(next),
    customPaging: (i: number) => (
      <div
        className={`w-4 h-4 rounded-full transition-all duration-300 mt-20 ${
          i === activeSlide
            ? "bg-main scale-105 opacity-100"
            : "bg-white opacity-50"
        }`}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center items-center gap-4">{dots}</ul>
      </div>
    ),
    dots: true,
    infinite: true,
    arrows: false,
    pauseOnHover: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
  };

  return (
    <div className="w-full h-200 bg-[url('/home/hero7.jpg')] bg-cover bg-center bg-no-repeat border-b-4 border-dark-gray flex items-center relative">
      <Slider className="w-full" {...settings}>
        {products
          .slice()
          .sort((a, b) => {
            const aOrder = a.order;
            const bOrder = b.order;

            const aValid = aOrder !== null && aOrder !== undefined;
            const bValid = bOrder !== null && bOrder !== undefined;

            if (aValid && bValid) return aOrder - bOrder;
            else if (aValid) return -1;
            else if (bValid) return 1;
            else return 0;
          })
          .slice(0, 3)
          .map((item, i) => {
            const imageUrl =
              item?.mainImage && item.mainImage.url != ""
                ? getStrapiMedia(item.mainImage.url)
                : "";
            const isInCart = checkIfInCart(item.id);

            return (
              <div
                className="!flex items-center justify-between gap-15 w-full px-50"
                key={i}
              >
                <div className="w-1/2 flex flex-col gap-6">
                  <div>
                    <div className="text-xs text-main font-bold mb-5">
                      {item?.bestseller && "BESTSELLER"}
                    </div>
                    <Link href={`/produkty/${item?.id}`}>
                      <div className="text-5xl text-white font-bold">
                        {item?.preTitle}
                      </div>
                      <div className="text-6xl text-main font-bold">
                        {item?.title}
                      </div>
                    </Link>
                  </div>
                  <Link
                    className="text-white text-sm font-medium"
                    href={`/produkty/${item?.id}`}
                  >
                    {item?.quickDescription}
                  </Link>
                  <div className="flex items-center gap-2">
                    <button className="text-white bg-main text-left px-8 py-2 rounded-3xl font-nunito cursor-pointer flex items-center transition duration-200 hover:scale-105">
                      <div>
                        <div className="font-bold">KUP TERAZ</div>
                        <div className="text-xs mt-[-5]">
                          {Number(item?.price).toFixed(2)} PLN{" "}
                          {item.vat !== null &&
                            item.vat !== undefined &&
                            `(${item.vat}% VAT)`}
                        </div>
                      </div>
                      <ChevronDoubleRightIcon className="w-8 h-8 ml-10" />
                    </button>
                    {isInCart ? (
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-13 h-13 bg-gray-400 rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 cursor-pointer"
                      >
                        <BsFillCartDashFill />
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="w-13 h-13 bg-main rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 cursor-pointer"
                      >
                        <BsFillCartPlusFill className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  <div>
                    <button className="text-white cursor-pointer hover:text-main transition">
                      <Link
                        href={`/produkty/${item?.id}`}
                        className="flex items-center"
                      >
                        <div>Dowiedz się więcej</div>
                        <ChevronDoubleRightIcon className="w-5 h-5 ml-1 mb-[-5]" />
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Link
                    className="bg-cover bg-center bg-no-repeat w-full max-w-[600px] aspect-[4/3] rounded-3xl"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    href={`/produkty/${item?.id}`}
                  ></Link>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Hero;
