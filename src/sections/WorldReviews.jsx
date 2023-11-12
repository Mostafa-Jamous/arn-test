import React, { useState } from "react";
import dark from "../assets/imgs/dark.jpg";
import stars from "../assets/imgs/stars.svg";
import { BiPlay } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import BlackPopup from "../components/BlackPopup";

function WorldReviews() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="-z-10 ">
      <div
        onClick={() => setIsOpen(true)}
        className="h-[520px] mb-20 overflow-hidden relative cursor-pointer rounded-lg"
      >
        <img
          className="w-full h-full reviewImg transition-all duration-[1500ms]"
          src={dark}
          alt=""
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
          <h1 className="font-bold text-3xl  text-white mb-9">
            Every year, millions of people choose Mixtiles
          </h1>
          <button className="flex gap-2 items-center mx-auto bg-white text-[#f07] py-3 px-8 font-bold rounded-lg">
            <BiPlay size={20} />
            Watch the video
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className={` top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] fixed  bg-white  h-[70%] w-[70%] duration-700`}
          ></div>
          <BlackPopup onClick={() => setIsOpen(false)} />
        </>
      )}
      <div className="flex items-center justify-around max-md:grid max-md:grid-cols-1 max-md:gap-10 mb-8 gap-5 text-center">
        <div>
          <div className="flex items-center  w-fit mx-auto">
            <AiFillStar color="gold" size={25} />
            <AiFillStar color="gold" size={25} />
            <AiFillStar color="gold" size={25} />
            <AiFillStar color="gold" size={25} />
            <AiFillStar color="gold" size={25} />
          </div>
          <h1 className="text-[#333] font-bold text-lg mt-2">
            Rated 4.9 on the Appstore
          </h1>
          <p className="text-lg font-light">Based on 80,000+ Reviews</p>
        </div>
        <div className="flex items-center gap-7 mx-auto">
          <img
            src="https://mixtiles.com/static/assets/oprah.926b347a.svg"
            alt=""
          />
          <img
            src="https://mixtiles.com/static/assets/cnet.15aab0cd.svg"
            alt=""
          />
          <img
            src="https://mixtiles.com/static/assets/today.b35e6cde.svg"
            alt=""
          />
        </div>
        <div>
          <img className="w-fit mx-auto" src={stars} alt="" />
          <h1 className="text-[#333] font-bold text-lg mt-2">
            Rated Excellent on Trustpilot
          </h1>
          <p className="text-lg font-light">Based on 10,000+ Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default WorldReviews;
