import Hero from "./components/home/Hero";
import Products from "./components/shared/Products";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <section className="container max-w-7xl mx-auto py-10">
        <h1 className="text-white text-3xl font-bold mb-10">Nasze produkty</h1>
        <Products />
      </section>
    </div>
  );
}
