import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { BsFillCartPlusFill } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full h-200 bg-[url('/home/hero7.jpg')] bg-cover bg-center bg-no-repeat border-b-4 border-dark-grey px-50 flex items-center">
      <div className="flex flex-col gap-6">
        <div>
          <div className="text-xs text-main font-bold mb-5">BESTSELLER</div>
          <div className="text-5xl text-white font-bold">High quality</div>
          <div className="text-7xl text-main font-bold">Przejściówki</div>
        </div>
        <div className="w-150 text-white text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante, tempor
          nec imperdiet vitae, tempor at leo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ullam impedit ducimus tenetur minima libero voluptatum, mollitia esse perspiciatis, officia nobis architecto repellat repudiandae quae distinctio iste tempore exercitationem molestiae.
        </div>
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
          <button className="text-white cursor-pointer flex items-center hover:text-main transition">
            <Link href="/produkty/1">Dowiedz się więcej</Link>{" "}
            <ChevronDoubleRightIcon className="w-5 h-5 ml-1 mb-[-5]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
