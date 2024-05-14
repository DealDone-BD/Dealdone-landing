import React from "react";
import PricingCardItem from "./PricingCardItem";
import { IoHomeOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const PricingCard = () => {
  const items = [
    {
      icon: <IoHomeOutline />,
      title: "Cottage & Micro",
      text: "(Free For First 12Months) ",
      price: "999",
    },
    {
      icon: <HiOutlineBuildingOffice2 />,
      title: "SME",
      text: "(Free For First 6Months) ",
      price: "2999",
    },
    {
      icon: <BsBuildings />,
      title: "Enterprise",
      text: "(15Days FREE Trial) ",
      price: "9,999",
    },
  ];
  return (
    <div className="flex flex-col gap-5 md:px-12">
      {items.map((item, i) => (
        <PricingCardItem key={i} item={item} />
      ))}
    </div>
  );
};

export default PricingCard;
