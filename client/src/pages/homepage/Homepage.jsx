import React, { useState, useEffect } from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import Categories from "../../components/categories/Categories";
import Card from "../../components/product-card/Card";
import Services from "../../components/services/Services";
import NewsLetter from "../../components/news-letter/NewsLetter";
import { fetchingProductStart, fetchingProductSuccess, fetchingProductFailure } from "../../redux/products/productSlice";
import {useDispatch} from "react-redux"

const Homepage = () => {
 
  const dispatch = useDispatch()

  const getShoesData = async () => {
    try{
      dispatch(fetchingProductStart())
      const res = await fetch("http://localhost:5000/api/products/shoes");
      const data = await res.json();
      return data;
    }catch(err){
      console.log(err);
      dispatch(fetchingProductFailure(err.message))
    }

  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShoesData();
      console.log(data)
      dispatch(fetchingProductSuccess(data))
    };

    fetchData();
  }, []);

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
