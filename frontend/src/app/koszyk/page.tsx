import ItemsList from "../components/koszyk/ItemsList";

const Koszyk = () => {
  return (
    <section className="pt-[100px]">
      <div className="container max-w-7xl mx-auto py-10">
        <h1 className="text-white text-3xl font-bold">Twój koszyk</h1>
        <ItemsList />
      </div>
    </section>
  );
};

export default Koszyk;
