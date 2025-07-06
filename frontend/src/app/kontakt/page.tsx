import React from "react";
import Contact from "../components/kontakt/Contact";

const Kontakt = () => {
  return (
    <section className="pt-[100px]">
      <div className="container max-w-7xl mx-auto py-10 flex flex-col items-center px-10 2xl:px-0 text-center">
        <h1 className="font-bold text-4xl text-white">Napisz do nas</h1>
        <p className="text-white mt-2">
          Uzupełnij dane poniżej, skontaktujemy się z Tobą najbszybciej, jak to
          możliwe.
        </p>
        <Contact />
      </div>
    </section>
  );
};

export default Kontakt;
