import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Sidebar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandsOpen, setIsBrandsOpen] = useState(true);
  const [isSizesOpen, setIsSizesOpen] = useState(true);
  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isPricesOpen, setIsPricesOpen] = useState(true);

  const categories = ["Sports", "Formal", "Casual"];
  const brands = ["Force 10", "Gliders", "LEAP7X"];
  const sizes = [6, 7, 8, 9, 10];
  const genders = ["Men", "Women", "Kids"];
  const prices = [
    "Below Rs.499",
    "Rs.500 - Rs.999",
    "Rs.1000 - Rs.1999",
    "Rs.2000 - Rs.2999 ",
    "Rs.3000 - Rs.3999",
    "Rs.4000" - "Rs.4999",
    "Rs.5000" - "Rs.5999",
    "Rs.6000 - Rs.6999",
  ];

  const [checkedCategories, setCheckedCategories] = useState({});
  const [checkedBrands, setCheckedBrands] = useState({});
  const [checkedSizes, setCheckedSizes] = useState({});
  const [checkedGenders, setCheckedGenders] = useState({});
  const [checkedPrices, setCheckedPrices] = useState({});

  const handleCatgeoryOpenAndClose = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleBrandsOpenAndClose = () => {
    setIsBrandsOpen(!isBrandsOpen);
  };

  const handleSizesOpenAndClose = () => {
    setIsSizesOpen(!isSizesOpen);
  };

  const handleGenderOpenAndClose = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  const handlePriceOpenAndClose = () => {
    setIsPricesOpen(!isPricesOpen);
  };

  const handleCheckboxChange = (category, type) => {
    if (type === "categories") {
      setCheckedCategories({
        ...checkedCategories,
        [category]: !checkedCategories[category],
      });
    } else if (type === "brands") {
      setCheckedBrands({
        ...checkedBrands,
        [category]: !checkedBrands[category],
      });
    } else if (type === "sizes") {
      setCheckedSizes({
        ...checkedSizes,
        [category]: !checkedSizes[category],
      });
    } else if (type === "genders") {
      setCheckedGenders({
        ...checkedGenders,
        [category]: !checkedGenders[category],
      });
    } else if (type === "prices") {
      setCheckedPrices({
        ...checkedPrices,
        [category]: !checkedPrices[category],
      });
    }
  };

  console.log(checkedCategories);
  console.log(checkedBrands);
  console.log(checkedSizes);

  return (
    <div className="bg-slate-600 w-1/5 items-center flex flex-col p-4">
      <div>FILTER</div>
      <div className="w-full relative">
        <div className="flex items-center justify-between">
          <div>Category</div>
          <div onClick={handleCatgeoryOpenAndClose} className="cursor-pointer">
            {isCategoryOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        <ul className={`${isCategoryOpen ? "block" : "hidden"}  p-2 rounded`}>
          {categories.map((category, idx) => (
            <li key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={category}
                checked={checkedCategories[category] || false}
                onChange={() => handleCheckboxChange(category, "categories")}
                className="mr-2"
              />
              <label htmlFor={category} className="cursor-pointer">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full relative">
        <div className="flex items-center justify-between">
          <div>BRAND</div>
          <div onClick={handleBrandsOpenAndClose} className="cursor-pointer">
            {isBrandsOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        <ul className={`${isBrandsOpen ? "block" : "hidden"}  p-2 rounded`}>
          {brands.map((brand) => (
            <li key={brand} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={brand}
                checked={checkedBrands[brand] || false}
                onChange={() => handleCheckboxChange(brand, "brands")}
                className="mr-2"
              />
              <label htmlFor={brand} className="cursor-pointer">
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full relative">
        <div className="flex items-center justify-between">
          <div>Select Size</div>
          <div onClick={handleSizesOpenAndClose} className="cursor-pointer">
            {isSizesOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        <ul className={`${isSizesOpen ? "block" : "hidden"}  p-2 rounded`}>
          {sizes.map((size) => (
            <li key={size} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={size}
                checked={checkedSizes[size] || false}
                onChange={() => handleCheckboxChange(size, "sizes")}
                className="mr-2"
              />
              <label htmlFor={size} className="cursor-pointer">
                {size}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full relative">
        <div className="flex items-center justify-between">
          <div>GENDER</div>
          <div onClick={handleGenderOpenAndClose} className="cursor-pointer">
            {isGenderOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        <ul className={`${isGenderOpen ? "block" : "hidden"}  p-2 rounded`}>
          {genders.map((gender) => (
            <li key={gender} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={gender}
                checked={checkedGenders[gender] || false}
                onChange={() => handleCheckboxChange(gender, "genders")}
                className="mr-2"
              />
              <label htmlFor={gender} className="cursor-pointer">
                {gender}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full relative">
        <div className="flex items-center justify-between">
          <div>Prices</div>
          <div onClick={handlePriceOpenAndClose} className="cursor-pointer">
            {isPricesOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        <ul className={`${isPricesOpen ? "block" : "hidden"}  p-2 rounded`}>
          {prices.map((price) => (
            <li key={price} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={price}
                checked={checkedPrices[price] || false}
                onChange={() => handleCheckboxChange(price, "prices")}
                className="mr-2"
              />
              <label htmlFor={price} className="cursor-pointer">
                {price}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
