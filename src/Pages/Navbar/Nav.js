import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
} from "@material-tailwind/react";
import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import logoSmall from "../../assets/logoSmall.png";
import { useContext } from "react";
import { ScrollContext } from "../../Context/ScrollPosition";
import SwitchButton from "../../Components/Button/SwitchButton";
import { useEffect } from "react";
// import {useRef} from "react"
// import { useState } from "react";

const Nav = ({ active }) => {
  const [openNav, setOpenNav] = React.useState(false);
  // const [openSlide, setopenSlide] = useState("");
  // const { width } = useContext(ScrollContext);
  const { scrollPosition } = useContext(ScrollContext);
  // const catMenu = useRef(null)
  // console.log("width", width);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 400 && setOpenNav(false)
    );
  }, []);
  // ---------for click outside nav close--------------------
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenNav(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  //   const closeOpenMenus = (e)=>{
  //     if(catMenu.current && openSlide && !catMenu.current.contains(e.target)){
  //       setopenSlide(false)
  //     }
  // }

  const themeButton = (
    <div className="flex justify-center items-center md:ml-0 ">
      <SwitchButton />
    </div>
  );

  const signUpButton = (
    <>
      <a href="https://app.dealdone.com.bd">
        <Button
          color="orange"
          className="bg-orange-600  px-3 py-2 md:px-5 md:py-3 md:text-sm "
        >
          Sign-Up
        </Button>
      </a>
    </>
  );

  const navList = (
    <>
      <ul className="mb-4 mt-4 flex flex-col gap-4  lg:mb-0 lg:mt-0 lg:flex-row items-end lg:items-center lg:gap-6">
        <Link
          to="/"
          spy={true}
          smooth={true}
          activeClass={active}
          offset={-78}
          duration={500}
          className="text-gray-800 dark:text-gray-200 font-bold hover:text-blue-500 duration-500 cursor-pointer "
        >
          Home
        </Link>

        <li className=" cursor-pointer">
          <Link
            to="why_dealdone"
            spy={true}
            activeClass={active}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-gray-800 dark:text-gray-200 font-bold hover:text-blue-500  duration-500"
          >
            Why Dealdone
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="credit_scoring"
            spy={true}
            activeClass={active}
            smooth={true}
            offset={-85}
            duration={500}
            className="text-gray-800 dark:text-gray-200 font-bold hover:text-blue-500  duration-500"
          >
            Credit Scoring
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            activeClass={active}
            offset={-70}
            duration={500}
            className="text-gray-800 dark:text-gray-200  font-bold  hover:text-blue-500  duration-500"
          >
            Pricing
          </Link>
        </li>
        <li className=" cursor-pointer">
          <Link
            to="footer"
            spy={true}
            smooth={true}
            activeClass={active}
            offset={-70}
            duration={500}
            className="text-gray-800 dark:text-gray-200  font-bold  hover:text-blue-500  duration-500"
          >
            About Us
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <Navbar
        className={`sticky inset-0 z-10 h-max max-w-full rounded-none  
       border-none py-2 px-4 lg:px-8 lg:py-3  transition-shadow bg-inherit ${
         scrollPosition > 0
           ? "shadow-[0_25px_30px_-15px_rgba(0,0,0,0.2)]"
           : "shadow-none "
       }`}
        ref={menuRef}
      >
        <div className="flex items-center justify-between text-blue-gray-900 px-3">
          <Link
            to="/"
            spy={true}
            smooth={true}
            // activeClass="active"
            offset={-78}
            duration={500}
            className="cursor-pointer"
          >
            <img className="w-12 md:hidden" src={logoSmall} alt="..." />
            <img className="w-32 hidden md:block" src={logo} alt="..." />
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/*<div className="justify-around mt-2">{signUpButton}</div>*/}
            <div className="hidden md:flex justify-around mt-2">
              {themeButton}
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 dark:text-white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="flex justify-end mx-5">{navList}</div>
          <div className="md:hidden flex justify-end gap-5 my-2 mx-5">
            {themeButton}
          </div>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Nav;
