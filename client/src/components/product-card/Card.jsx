import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col w-1/2 md:w-1/4">
      <div className="w-full cursor-pointer">
        <img
          src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Men-Flip-Flops_20-oct.webp"
          alt="shoey"
        />
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <h1 className="font-medium">Flip-Flops</h1>
        <p className="text-sm">
          Put your best foot forward with these flip flops
        </p>
        <button className="border border-neutral-300 text-medium font-medium p-2">
          Shop Flip-Flops
        </button>
      </div>
    </div>
  );
};

export default Card;
