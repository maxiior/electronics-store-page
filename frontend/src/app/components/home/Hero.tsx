import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ItemInterface } from "@/app/types/produkty/Item";
import Link from "next/link";
import Image from "next/image";

const Hero = ({ data }: { data: ItemInterface[] }) => {
  return (
    <div className="w-full h-200 bg-[url('/home/hero7.jpg')] bg-cover bg-center bg-no-repeat border-b-4 border-dark-grey px-50 flex items-center justify-between gap-15">
      <div className="w-1/2 flex flex-col gap-6">
        <div>
          <div className="text-xs text-main font-bold mb-5">BESTSELLER</div>
          <Link href="/produkty/1">
            <div className="text-5xl text-white font-bold">High quality</div>
            <div className="text-7xl text-main font-bold">Przejściówki</div>
          </Link>
        </div>
        <Link className="text-white text-sm font-medium" href="/produkty/1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante, tempor
          nec imperdiet vitae, tempor at leo.
        </Link>
        <div className="flex items-center gap-2">
          <button className="text-white bg-main text-left px-8 py-2 rounded-3xl font-nunito cursor-pointer flex items-center transition duration-200 hover:scale-105">
            <div>
              <div className="font-bold">KUP TERAZ</div>
              <div className="text-xs mt-[-5]">20.00 PLN</div>
            </div>
            <ChevronDoubleRightIcon className="w-8 h-8 ml-10" />
          </button>
          <button className="w-13 h-13 bg-main rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 cursor-pointer">
            <BsFillCartPlusFill className="w-5 h-5" />
          </button>
        </div>
        <div>
          <button className="text-white cursor-pointer hover:text-main transition">
            <Link href="/produkty/1" className="flex items-center">
              <div>Dowiedz się więcej</div>
              <ChevronDoubleRightIcon className="w-5 h-5 ml-1 mb-[-5]" />
            </Link>
          </button>
        </div>
      </div>
      {/* <div className="w-1/2 overflow-hidden">
        <div className="bg-[url('/home/p1.jpeg')] bg-contain bg-center bg-no-repeat py-70 rounded-2xl"></div>
      </div> */}
      <div className="w-1/2 relative py-70 rounded-2xl">
        <Image
          src="/home/p1.jpeg"
          alt=""
          fill
          className="object-contain rounded-2xl"
          sizes=""
        />
      </div>
    </div>
  );
};

export default Hero;
