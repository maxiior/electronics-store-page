import Products from "../components/shared/Products";

const Produkty = () => {
  return (
    <section className="py-[100px]">
      <div className="container max-w-7xl mx-auto py-10">
        <h1 className="text-white text-3xl font-bold mb-10">Nasze produkty</h1>
        <Products />
      </div>
    </section>
  );
};

export default Produkty;
