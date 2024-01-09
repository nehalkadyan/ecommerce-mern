import React from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {

  const {productData} = useSelector((state) => state.products)
  console.log(productData)

  return <div className="flex flex-col">
    
  </div>;
};

export default ProductListing;
