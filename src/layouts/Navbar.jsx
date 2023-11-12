import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import BlackPopup from "../components/BlackPopup";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-10 mb-5 bg-MainBg flex items-center justify-between py-5 px-[40px] border-b">
      {isOpen && (
        <>
          <div
            className={`${
              isOpen ? "left-0" : "-left-full"
            } top-0 fixed z-30 bg-white  h-full w-[350px] duration-700`}
          ></div>
          <BlackPopup onClick={() => setIsOpen(false)} />
        </>
      )}
      <div
        onClick={() => setIsOpen(true)}
        className="hover:bg-black/10 p-[5px] rounded-full "
      >
        <FiMenu size={20} />
      </div>
      <Link to="/">
        <h1 className="font-bold text-[17px] tracking-[2px]">MIXITLES</h1>
      </Link>
      <div className="hover:bg-black/10 p-[5px] rounded-full">
        <RiMessage2Line size={20} />
      </div>
    </div>
  );
}

export default Navbar;
