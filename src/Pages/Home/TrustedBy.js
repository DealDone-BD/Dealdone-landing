import React from "react";
import "./Brand.css";
import Carousel from "react-elastic-carousel";
import brnad1 from "../../assets/Company logo/teton.jpeg";
import brnad2 from "../../assets/Company logo/xpert.jpeg";
import brnad3 from "../../assets/Company logo/megastarr.jpeg";
import brnad4 from "../../assets/Company logo/livewire.png";
import brnad5 from "../../assets/Company logo/contrivance.png";



import { Typography } from "@material-tailwind/react";

const TrustedBy = () => {
  const carouselRef = React.createRef(null);
  let resetTimeout;

  const items = [
    {
      brand: brnad2,
    },
    {
      brand: brnad4,
    },
    {
      brand: brnad1,
    },
    {
      brand: brnad5
    }, {
      brand: brnad3
    }

  ];
  const breakPoints = [
    {
      width: 6,
      itemsToShow: 3,
      itemsToScroll: 0,
    },
    {
      width: 550,
      itemsToShow: 4,
      itemsToScroll: 0,
    },
    {
      width: 768,
      itemsToShow: 3,
      itemsToScroll: 0,
    },
    {
      width: 1000,
      itemsToShow: 6,
      itemsToScroll: 0,
    },
  ];

  return (
    <div className=" justify-center items-center ">
      <Typography
        className="font-extrabold text-2xl md:text-5xl text-center flex  justify-center md:text-start py-2"
        variant="h1"
      >
        Trusted By
      </Typography>
      <div className="flex my-6   md:my-12 w-full">
        <Carousel
          breakPoints={breakPoints}
          ref={carouselRef}
          enableMouseSwipe={true}
          // itemsToShow={3}
          // itemsToScroll={itemsToScroll}
          // renderArrow={myArrow}
          pagination={false}
          // renderPagination={myPagination}
          enableAutoPlay={true}
          autoPlaySpeed={2000}
          onNextEnd={({ index }) => {
            // console.log("index", index, "length", items.length);
            // if (index === 9) {
            if (index === 1) {
              clearTimeout(resetTimeout);
              resetTimeout = setTimeout(() => {
                carouselRef?.current?.goTo(0);
              }, 2000); // same time
            }
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              item={item}
              className=" mx-0.5 p-2 md:p-7 rounded-md h-12 md:h-20 w-full md:w-52 flex justify-center items-center"
            >
              <img src={item.brand} alt="..." className="w-full " />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TrustedBy;
