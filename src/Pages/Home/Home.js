import React from "react";
import mainBanner from "../../assets/landingBanner-2.png";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  return (
    <div id="/" className="flex flex-col min-h-fit md:flex-row mx-3 md:mx-10">
      <div className="w-full pt-7 md:pt-0 md:w-5/12 flex flex-col justify-center px-2 gap-8 md:gap-4">
        <p className="font-extrabold text-2xl px-2 md:px-0 md:text-4xl text-center md:text-start py-2">
          {/* Connect Your Sales Channels,
          <br /> To Manage All-In-One Place */}
          Sell On Multiple Marketplaces Painlessly, All-In-One Place
        </p>
        <p className="font-semibold text-sm md:text-lg text-center md:text-start">
          An Omni-Channel Aggregator SaaS
        </p>
        {/*<div className="mx-auto md:m-0 hidden md:block">*/}
        {/*  <a href="https://app.dealdone.com.bd/login">*/}
        {/*    <PrimaryButton className="md:mr-auto py-2 px-4 md:px-7 md:py-3  mb-4 md:mb-0  text-xs md:text-xl">*/}
        {/*      Start For Free*/}
        {/*    </PrimaryButton>*/}
        {/*  </a>*/}
        {/*</div>*/}
        <div className="w-full md:hidden p-2 ">
          <img className="" src={mainBanner} alt="..." />
        </div>
      </div>
      <div className="w-full hidden md:block md:w-7/12 p-2 ">
        <img className="" src={mainBanner} alt="..." />
      </div>
      {/*<div className="m-auto pt-8 md:m-0 block md:hidden">*/}
      {/*  <a href="https://app.dealdone.com.bd/login">*/}
      {/*    <PrimaryButton className="py-2 px-4 mb-4 text-xs">*/}
      {/*      Start For Free*/}
      {/*    </PrimaryButton>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
};

export default Home;
