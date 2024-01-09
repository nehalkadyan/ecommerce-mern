import React, { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const Seachbar = () => {
  const [acitveView, setActiveView] = useState(1);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Sort By");
  const sortOptions = [
    "New Arrivals",
    "Price (Low to High)",
    "Price (High to Low)",
  ];

  const handleActiveView = (viewId) => {
    setActiveView(viewId);
  };

  const handleSortOpenAndClose = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  return (
    <div className="w-full flex justify-between items-center p-6">
      <div className="flex gap-4">
        <div
          onClick={() => handleActiveView(1)}
          className="text-2xl cursor-pointer"
        >
          <IoGrid
            className={`${
              acitveView === 1 ? "text-gray-500" : "text-slate-900"
            }`}
          />
        </div>

        <div
          onClick={() => handleActiveView(2)}
          className="text-2xl cursor-pointer"
        >
          <FaThList
            className={`${
              acitveView === 2 ? "text-gray-500" : "text-slate-900"
            }`}
          />
        </div>
      </div>

      <div>
        <input
          placeholder="Search"
          className="border border-neutral-200 p-2 pr-12 rounded outline-none"
        />
      </div>

      <div>
        <div
          onClick={handleSortOpenAndClose}
          className="flex gap-16 items-center justify-between cursor-pointer p-2 border border-neutral-200"
        >
          <div>{sortBy}</div>
          <div>
            <FaArrowDown />
          </div>
        </div>

        <ul
          className={`${
            isSortByOpen ? "flex flex-col" : "hidden"
          } absolute gap-4 p-2 border`}
        >
          {sortOptions.map((sortOption, idx) => (
            <li
              onClick={() => setSortBy(sortOption)}
              className="border-neutral-200 cursor-pointer"
              key={idx}
            >
              {sortOption}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Seachbar;
