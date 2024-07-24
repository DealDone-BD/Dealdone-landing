import React from "react";
import Home from "./Home/Home";
import Nav from "../Pages/Navbar/Nav";
import WhyDealdone from "./WhyDealdone/WhyDealdone";
import Brands from "./Home/Brands";
import Pricing from "./Pricing/Pricing";
import Footer from "./Footer/Footer";
import CreditScore from "./CreditScore/CreditScore";
import TrustedBy from "./Home/TrustedBy";

const LandingPage = () => {
  return (
    <>
      <Nav />
      <div className="max-w-[1440px] mx-auto">
        <Home />
        <Brands />
        <WhyDealdone />
        <CreditScore />
        <Pricing />
        <TrustedBy />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
