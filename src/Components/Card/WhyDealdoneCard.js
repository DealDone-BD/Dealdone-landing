import { Typography } from "@material-tailwind/react";
import React from "react";
import "./WhyDealdoneCard.css";

const WhyDealdoneCard = ({ item }) => {
  return (
    // col-span-1 item
    <section
      className="bg-white dark:bg-darkComp w-full  mx-auto
     rounded-2xl border-2 border-gray-300 dark:border-darkBorder"
    >
      <div className="w-full  h-56 md:h-[320px] mx-auto  bg-transparent cursor-pointer group [perspective:1000px]">
        <div className="relative [transform-style:preserve-3d] group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div
            className="absolute backface-hidden rounded-2xl 
           dark:border-darkBorder w-full h-full flex flex-col p-2 justify-center items-center "
          >
            <img src={item.img} className="w-40 md:w-8/12 mx-auto" alt="..." />
            <Typography
              variant="h5"
              className="py-2 text-md md:text-xl flex justify-center items-center text-center font-extrabold"
            >
              {item.title}
            </Typography>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-300 rounded-xl overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 p-2 md:p-5">
              <p className="text-md md:text-3xl font-semibold">{item.title}</p>
              <p className=" text-sm">{item.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDealdoneCard;
