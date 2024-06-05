import React from "react";
import "./Brand.css";
import Carousel from "react-elastic-carousel";
import brnad1 from "../../assets/Company logo/01.png";
import brnad2 from "../../assets/Company logo/02.png";
import brnad3 from "../../assets/Company logo/03.png";
import brnad4 from "../../assets/Company logo/04.png";
import brnad5 from "../../assets/Company logo/05.png";
import brnad6 from "../../assets/Company logo/06.png";
import brnad7 from "../../assets/Company logo/07.png";
import brnad8 from "../../assets/Company logo/Pickaboo.png";

const Brands = () => {
  const carouselRef = React.createRef(null);
  let resetTimeout;

  const items = [
    {
      brand: brnad1,
    },
    {
      brand: brnad2,
    },
    {
      brand: brnad3,
    },
    {
      brand: brnad8,
    },
    {
      brand: brnad5,
    },
    {
      brand: brnad6,
    },
    {
      brand: brnad7,
    },{
      brand: brnad4,
    }
  ];
  const breakPoints = [
    {
      width: 6,
      itemsToShow: 3,
      itemsToScroll: 1,
    },
    {
      width: 550,
      itemsToShow: 4,
      itemsToScroll: 4,
    },
    {
      width: 768,
      itemsToShow: 5,
      itemsToScroll: 2,
    },
    {
      width: 1000,
      itemsToShow: 7,
      itemsToScroll: 1,
    },
  ];

  return (
    <div className="flex justify-center items-center my-6   md:my-12 w-full">
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
  );
};

export default Brands;
