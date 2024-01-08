import React from "react";
import Card from "../product-card/Card";

const Categories = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="text-xl md:text-4xl font-medium text-center text-slate-800">
        SHOP BY CATEGORIES
      </div>
      <div className="w-1/2 mx-auto flex gap-16 justify-center mt-12 border-b border-neutral-200">
        <button className="border-none text-xl">MEN</button>
        <button className="border-none text-xl">WOMEN</button>
        <button className="border-none text-xl">KIDS</button>
      </div>

      <div>
        <Card />
      </div>
    </section>
  );
};

export default Categories;
