import { BsFillCartPlusFill } from "react-icons/bs";

const Item = () => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 cursor-pointer">
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
        {/* <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        /> */}
        <div className="absolute right-4 bottom-4 w-12 h-12 bg-main rounded-full flex items-center justify-center text-white text-xl transition duration-200 hover:scale-105 ">
          <BsFillCartPlusFill className="w-5 h-5" />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-black dark:text-white">
        Przejściówka
      </h2>
      <div className="text-main font-medium">20.00 PLN</div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante, tempor nec
        imperdiet vitae, tempor at leo.
      </p>
    </article>
  );
};

export default Item;
