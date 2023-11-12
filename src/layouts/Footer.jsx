import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import BreakDiv from "../components/BreakDiv";
import BlackPopup from "../components/BlackPopup";
import footerLogo from "../assets/imgs/footerLogo.5e2eee3f.svg";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-xl:pb-16">
      {isOpen && (
        <>
          <div
            className={` top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] fixed  bg-white  h-[70%] w-[70%] duration-700`}
          ></div>
          <BlackPopup onClick={() => setIsOpen(false)} />
        </>
      )}
      <div className="grid grid-cols-2 text-left max-xl:hidden ">
        <div>
          <h1 className=" text-[16px] py-3 font-bold">About</h1>
          <h1 className="hover:text-[#f07] duration-300 text-[16px] py-3 cursor-pointer">
            FAQs
          </h1>
          <h1 className="hover:text-[#f07] duration-300 text-[16px] py-3 cursor-pointer">
            Careers
          </h1>
          <h1 className="hover:text-[#f07] duration-300 text-[16px] py-3 cursor-pointer">
            Accessibility Statement
          </h1>
        </div>
        <div>
          <h1 className=" text-[16px] py-3 font-bold">Follow Us</h1>
          <h1 className="hover:text-[#f07] duration-300 text-[16px] py-3 cursor-pointer">
            Instagram
          </h1>
          <h1 className="hover:text-[#f07] duration-300 text-[16px] py-3 cursor-pointer">
            Facebook
          </h1>
          <h1 className="hover:text-[#f07] duration-300 text-[16px] py-3 cursor-pointer">
            Twitter
          </h1>
        </div>
      </div>
      <img src={footerLogo} alt="" className="xl:hidden mx-auto w-fit py-14" />
      <div className="xl:hidden flex flex-col items-start gap-8 max-xl:mb-8">
        <h1 className="pb-1 text-xl cursor-pointer">Contact Us</h1>
        <h1 className="pb-1 text-xl cursor-pointer">Careers</h1>
        <h1 className="pb-1 text-xl cursor-pointer">FAQs</h1>
        <h1 className="pb-1 text-xl cursor-pointer">Gift Card</h1>
        <h1 className="pb-1 text-xl cursor-pointer">Accessibility Statement</h1>
      </div>
      <BreakDiv className="my-[35px] max-xl:my-[10px]" />
      <div className="flex items-center justify-between pb-14 max-xl:grid max-xl:grid-cols-1 max-xl:gap-5">
        <h1 className="text-sm text-[#777]">
          &copy; Copyright 2015 - 2023 Mixtiles. LTD
        </h1>
        <div className="flex items-center gap-6 max-xl:flex-col max-xl:items-start max-xl:text-black max-xl:gap-8 max-xl:my-5 max-xl:text-lg text-sm text-[#777]">
          <h1 className="underline max-xl:no-underline">Privacy Policy</h1>
          <h1 className="underline max-xl:no-underline">Impressum</h1>
          <h1 className="underline max-xl:no-underline">Terms of Use</h1>
          <h1 className="underline max-xl:no-underline">Accessibility</h1>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-between py-2 px-4 cursor-pointer rounded-xl hover:bg-black/20 w-[150px]"
        >
          <h1>English</h1>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Footer;
