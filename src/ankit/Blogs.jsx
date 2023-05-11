import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="mt-20">
      <h2 className="font-body text-xl mb-2">All blog posts</h2>
      <div className="flex flex-wrap gap-6">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <button className="font-body mx-auto bg-gray-900 text-white py-4 rounded-md px-10 ">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blogs;
