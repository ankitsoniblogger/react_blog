import React from "react";
import Story from "./Story";
import { blogData } from "./data";
import Slider from "react-slick";

const Test = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    lazyLoad: true,
  };
  return (
    <div>
      <h2 className="font-body text-xl mb-2">Latest Stories</h2>
      <Slider {...settings}>
        {blogData.map((item) => {
          return <Story img={item.img} title={item.title} key={item.id} />;
        })}
      </Slider>
    </div>
  );
};

export default Test;
