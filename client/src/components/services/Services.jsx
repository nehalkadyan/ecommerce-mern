import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsArrowRepeat } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-slate-800">
      <div className="flex-col flex md:flex-row items-center gap-20 md:gap-24 lg:gap-32 justify-center py-40">
        <div className="flex justify-center items-center flex-col gap-4">
          <div className=" text-7xl md:text-8xl  text-white">
            <CiDeliveryTruck />
          </div>
          <h2 className="text-white text-2xl font-medium">
            Free Shipping For All Order
          </h2>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="text-7xl md:text-8xl  text-white">
            <BsArrowRepeat />
          </div>
          <h2 className="text-white text-2xl font-medium">
            Free Shipping For All Order
          </h2>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <div className="text-7xl md:text-8xl  text-white">
            <FaMoneyBillAlt />
          </div>
          <h2 className="text-white text-2xl font-medium">
            Free Shipping For All Order
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
