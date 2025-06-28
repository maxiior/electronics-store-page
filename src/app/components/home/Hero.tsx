import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { BsFillCartPlusFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full h-200 py-60 bg-[url('/home/hero7.jpg')] bg-cover bg-center bg-no-repeat border-b-4 border-dark-grey px-20 flex flex-col gap-6">
      <div>
        <div className="text-5xl text-white font-bold">High quality</div>
        <div className="text-7xl text-main font-bold">Przejściówki</div>
      </div>
      <div className="w-150 text-white text-sm font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante, tempor nec
        imperdiet vitae, tempor at leo.
      </div>
      <div className="flex items-center gap-2">
        <button className="text-white bg-main text-left px-8 py-2 rounded-3xl font-nunito cursor-pointer flex items-center">
          <div>
            <div className="font-bold">KUP TERAZ</div>
            <div className="text-xs mt-[-5]">20.00 PLN</div>
          </div>
          <ChevronDoubleRightIcon className="w-8 h-8 ml-10" />
        </button>
        <button className="text-white bg-main px-4 h-full rounded-3xl cursor-pointer">
          <BsFillCartPlusFill className="w-6 h-6" />
        </button>
      </div>
      <div>
        <button className="text-white cursor-pointer flex items-center hover:text-main transition">
          <div>Dowiedz się więcej</div>{" "}
          <ChevronDoubleRightIcon className="w-5 h-5 ml-1 mb-[-5]" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
