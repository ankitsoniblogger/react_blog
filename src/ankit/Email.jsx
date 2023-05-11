import React from "react";

const Email = () => {
  return (
    <div className=" flex  items-center justify-center gap-2 mt-8 ">
      <input
        type="text"
        placeholder="Enter your email"
        required
        className="min-w-full font-text flex-auto rounded-md border focus:outline-none border-gray-500 bg-white/5 px-3.5 py-4 text-black shadow-sm "
      />
      <button className="font-body bg-gray-900 text-white py-4 rounded-md px-8 ">
        Subscribe
      </button>
    </div>
  );
};

export default Email;
