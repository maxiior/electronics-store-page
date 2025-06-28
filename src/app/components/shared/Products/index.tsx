import Item from "./Item";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Products;
