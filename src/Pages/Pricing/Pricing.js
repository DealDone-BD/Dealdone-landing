import { Typography } from "@material-tailwind/react";
import React from "react";
import PricingCard from "../../Components/Card/PricingCard";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Pricing = () => {
  const features = [
    {
      icon: <IoCheckmarkDoneCircle />,
      text: "Multi-Channel Product Listing",
    },
    {
      icon: <IoCheckmarkDoneCircle />,
      text: "Central Order Sync",
    },
    {
      icon: <IoCheckmarkDoneCircle />,
      text: "All Orders In A Tab",
    },
    {
      icon: <IoCheckmarkDoneCircle />,
      text: "Credit Score For Easy Loan",
    },
  ];
  return (
    <div id="pricing" className=" m-5 py-5 md:mx-10">
      <Typography variant="h5" className="font-bold text-center">
        Get started with one of our plans
      </Typography>

      <Typography
        className="font-extrabold text-2xl md:text-5xl text-center flex  justify-center md:text-start py-2"
        variant="h1"
      >
        Simple, Affordable Pricing
      </Typography>

      <div className="flex flex-col md:flex-row gap-5 md:m-10 my-5">
        <div className="w-full md:w-8/12">
          <PricingCard />
        </div>

        <div
          className=" bg-gray-100 dark:bg-darkComp mx-6 md:mx-0   md:w-4/12 border border-gray-300
         dark:border-darkBorder hover:border-green-700 rounded-lg p-10"
        >
          <Typography variant="h5" className="pb-5">
            Features
          </Typography>
          {features.map((feature, i) => (
            <div
              key={i}
              className="parent-style flex gap-4 py-1.5 justify-start items-center text-4xl hover:text-buttonColorHover cursor-pointer"
            >
              <span className="child-style font-bold text-green-700 hover:ring-2 ring-green-700 rounded-full p-0">
                {feature.icon}
              </span>
              <p className="child-style text-sm font-bold">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
