import React from "react";
import SectionHeading from "../../Components/Text/SectionHeading";
import img1 from "../../assets/1.Multi-Marketplace Product Listing1.gif";
import img2 from "../../assets/realTime.gif";
import img3 from "../../assets/all-orders.png";
import img4 from "../../assets/revenue.png";
import WhyDealdoneCard from "../../Components/Card/WhyDealdoneCard";

const WhyDealdone = () => {
  const items = [
    {
      img: img1,
      title: "Multi-Channel Product Listing",
      size:"400",
      text: "Expand from current channel onto many sales channels without a headache of manual listing.",
    },
    {
      img: img2,
      title: "Real Time Order Sync",
      size:"280",
      text: "Instant sync to keep your stock up to date on always evolving inventory and avoiding marketplaces ban for overselling on unavailable stock.",
    },
    {
      img: img3,
      title: "One Place To Manage Orders",
      size:"245",
      text: "View all the orders from different channels in one place & easily track & ship them, without missing any important deadline - giving you complete control over your business.",
    },
    {
      img: img4,
      title: "Revenue-Based Easy Loan ",
      size:"245",
      text: "Loans can be applied online in a click. We assess the data and create your credit profiles for our banking partners.",
    },
    // {
    //   img: img4,
    //   title: "",
    //   text: "Loans can be applied online in a click. We assess the data and create your credit profiles for our banking partners.",
    // },
  ];
  return (
    <div
      id="why_dealdone"
      className="px-3 md:px-10 min-h-fit my-14 md:my-0 p-5 "
    >
      <SectionHeading title="Why Dealdone?" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-7 p-2">
        {items.map((item, i) => (
          <WhyDealdoneCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyDealdone;
