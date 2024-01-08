import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Sidebar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const categories = ["Sports", "Formal", "Casual"];

  const [checkedCategories, setCheckedCategories] = useState({});

  const handleCatgeoryOpenAndClose = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCheckboxChange = (category) => {
    setCheckedCategories({
      ...checkedCategories,
      [category]: !checkedCategories[category],
    });
  };

  console.log(checkedCategories);

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

        <ul
          className={`${
            isCategoryOpen ? "block" : "hidden"
          } z-10 absolute top-10`}
        >
          {categories.map((category) => (
            <li key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={category}
                checked={checkedCategories[category] || false}
                onChange={() => handleCheckboxChange(category)}
                className="mr-2"
              />
              <label htmlFor={category} className="cursor-pointer">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
