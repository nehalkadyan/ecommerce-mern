import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Seachbar from "../../components/search-bar/Seachbar";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const {productData} = useSelector((state) => state.products)
  console.log(productData);

  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full">
        <Seachbar />
        
      </div>
    </div>
  );
};

export default ProductsPage;
