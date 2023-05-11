import React from "react";
import Story from "./Story";
import { blogData } from "./data";
import Slider from "react-slick";

const Stories = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    lazyLoad: true,
  };
  return (
    <>
      <h2 className="font-body text-xl mt-20 mb-2">Latest Stories</h2>
      <Slider {...settings}>
        {blogData.map((item) => {
          return <Story img={item.img} title={item.title} key={item.id} />;
        })}
      </Slider>
    </>
  );
};

export default Stories;
