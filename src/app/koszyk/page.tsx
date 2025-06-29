import React from "react";

const Koszyk = () => {
  return (
    <section className="pt-[100px]">
      <div className="container max-w-7xl mx-auto py-10">
        <h1 className="text-white text-3xl font-bold">Twój koszyk</h1>
        <button className="text-white bg-main rounded-2xl px-20 py-2 cursor-pointer transition duration-200 hover:scale-105">
          Przejdź do płatności
        </button>
      </div>
    </section>
  );
};

export default Koszyk;
