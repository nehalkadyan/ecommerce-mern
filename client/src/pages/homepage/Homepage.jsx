import React, { useState } from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import Categories from "../../components/categories/Categories";
import Card from "../../components/product-card/Card";
import Services from "../../components/services/Services";
import NewsLetter from "../../components/news-letter/NewsLetter";

const Homepage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleActiveButton = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="bg-neutral-50">
      <HeroSection />
      <Categories />
      <div className="flex justify-center mx-auto w-1/2 lg:w-1/3 gap-10 md:gap-22 border-b border-neutral-200">
        <button
          onClick={() => handleActiveButton(1)}
          className={`${
            activeButton === 1 ? "border-b border-red-800 text-red-800" : ""
          } px-6 py-2 text-xl`}
        >
          NEW ARRIVALS
        </button>
        <button
          onClick={() => handleActiveButton(2)}
          className={`${
            activeButton === 2 ? "border-b border-red-800 text-red-800" : ""
          } px-6 py-2 text-xl`}
        >
          BEST SELLER
        </button>
      </div>
      <Card />
      <Services />
      <NewsLetter />
    </div>
  );
};

export default Homepage;
