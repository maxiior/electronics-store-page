import Item from "./Item";
import { ItemInterface } from "@/app/types/produkty/Item";

const Products = ({ full, data }: { full: boolean; data: ItemInterface[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {(full ? data : data.slice(0, 8))
        .sort((a, b) => Number(b.bestseller) - Number(a.bestseller))
        .map((i) => (
          <Item
            title={i.title}
            price={i.price}
            quickDescription={i.quickDescription}
            id={i.id}
            urlBuyNow={i.urlBuyNow}
            mainImage={i.mainImage}
            key={i.id}
          />
        ))}
    </div>
  );
};

export default Products;
