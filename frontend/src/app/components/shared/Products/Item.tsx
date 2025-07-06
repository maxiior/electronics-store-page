import { BsFillCartPlusFill } from "react-icons/bs";
import { ItemInterface } from "@/app/types/produkty/Item";
import Link from "next/link";
import { getStrapiMedia } from "@/app/api/utils";
import Image from "next/image";

const Item = (data: ItemInterface) => {
  const imageUrl = getStrapiMedia(data.mainImage.url);
  return (
    <article className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
      <Link href={`/produkty/${data.id}`}>
        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute right-4 bottom-4 w-12 h-12 bg-main rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105">
            <BsFillCartPlusFill className="w-5 h-5" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-black dark:text-white">
          {data.title}
        </h2>
        <div className="text-main font-medium">
          {Number(data.price).toFixed(2)} PLN
        </div>
        <p className="text-gray-600 text-sm">{data.quickDescription}</p>
      </Link>
      <Link
        className="bg-main block text-white font-semibold px-4 py-3 rounded-2xl text-center cursor-pointer mt-5 transition duration-200 hover:scale-105"
        href={data.urlBuyNow}
      >
        KUP TERAZ
      </Link>
    </article>
  );
};

export default Item;
