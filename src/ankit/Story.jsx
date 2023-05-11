import React from "react";

const Story = (e) => {
  return (
    <div className="bg-black mx-auto w-80 overflow-hidden h-96 rounded-md relative text-center">
      <img
        src={e.img}
        alt="travels stories"
        className="rounded-md opacity-70"
      />
      <h2 className="font-body text-2xl z-10 absolute top-2/4 left-2/4 text-white -translate-x-2/4 -translate-y-1/2">
        {e.title}
      </h2>
    </div>
  );
};

export default Story;
