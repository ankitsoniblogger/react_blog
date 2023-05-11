import React from "react";
import Hero from "./Hero";
import Stories from "./Stories";
import Blogs from "./Blogs";

const index = () => {
  return (
    <div className="px-20 ">
      <Hero />
      <Stories />
      <Blogs />
    </div>
  );
};

export default index;
