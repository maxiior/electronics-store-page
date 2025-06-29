import Item from "./Item";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <Item
        title="Przejściówka"
        price={20.0}
        quickDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante, tempor nec
        imperdiet vitae, tempor at leo."
        id="1"
        urlBuyNow=""
        image=""
        bestseller={true}
      />
      <Item
        title="Przejściówka"
        price={20.0}
        quickDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante, tempor nec
        imperdiet vitae, tempor at leo."
        id="2"
        urlBuyNow=""
        image=""
        bestseller={true}
      />
      <Item
        title="Przejściówka"
        price={20.0}
        quickDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante, tempor nec
        imperdiet vitae, tempor at leo."
        id="3"
        urlBuyNow=""
        image=""
        bestseller={true}
      />
      <Item
        title="Przejściówka"
        price={20.0}
        quickDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        felis suscipit, laoreet ex vitae, auctor arcu. Sed urna ante, tempor nec
        imperdiet vitae, tempor at leo."
        id="4"
        urlBuyNow=""
        image=""
        bestseller={true}
      />
    </div>
  );
};

export default Products;
