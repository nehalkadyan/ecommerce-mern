import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-32 w-full">
      <div className="flex flex-col items-center gap-8">
        <div>
          <h1 className="text-3xl">STAY CONNECTED</h1>
        </div>
        <div className="flex w-full justify-center">
          <input
            className="w-2/4 p-4 outline-none border  border-slate-800"
            type="email"
            placeholder="Enter your email id"
          />
          <button className="py-4 px-8 bg-slate-800 text-white">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
