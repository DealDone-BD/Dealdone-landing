import { Typography } from "@material-tailwind/react";
import React from "react";
import "./WhyDealdoneCard.css";

const WhyDealdoneCard = ({ item }) => {
  return (
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

            <img style={{width:item?.size+"px"}} src={item.img} className={`w-40 mx-auto`} alt="..." />
            <Typography
              variant="h5"
              className="py-2 text-md md:text-xl flex justify-center items-center text-center font-extrabold"
            >
              {item.title}
            </Typography>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-300 rounded-xl overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full p-2 md:p-5" style={{backgroundColor:"#3A8BCB",color:"white",fontWeight:"700"}}>
              <p className=" text-xs md:text-lg">{item.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDealdoneCard;
