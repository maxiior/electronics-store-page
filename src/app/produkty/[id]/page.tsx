import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { BsFillCartPlusFill } from "react-icons/bs";

const Produkt = () => {
  return (
    <section className="py-[100px]">
      <div className="container max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-100 bg-amber-400"></div>
        <div className="flex flex-col gap-6 w-full">
          <div>
            <div className="text-5xl text-white font-bold">High quality</div>
            <div className="text-7xl text-main font-bold">Przejściówki</div>
          </div>
          <div className="w-150 text-white text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante,
            tempor nec imperdiet vitae, tempor at leo.
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
        </div>
      </div>
    </section>
  );
};

export default Produkt;
