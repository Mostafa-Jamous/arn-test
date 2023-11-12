import React from "react";
import { LuPlane } from "react-icons/lu";
import LetsGoButton from "../components/LetsGoButton";

function Landing() {
  return (
    <div className="flex max-md:flex-wrap-reverse items-center gap-20 my-5">
      <div className="grid grid-cols-2 gap-5">
        <img
          className="my-auto rounded-xl"
          src="https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/assets/homepage//hero-1"
          alt=""
        />
        <div className="grid grid-cols-1 gap-4">
          <img
            className="rounded-xl w-[70%] max-md:w-full"
            src="https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/assets/homepage/old//hero-2"
            alt=""
          />
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/assets/homepage//hero-3"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-[65px] text-MainText leading-[4rem] mb-6 max-xl:font-semibold max-xl:text-[45px] max-xl:leading-none">
          Turn your photos into stunning wall art
        </h1>
        <div className="max-md:hidden">
          <p className="text-lg mb-6">
            Design beautiful walls filled with memories using your favorite
            photos
          </p>
          <LetsGoButton />
          <div className="flex gap-3 items-center">
            <LuPlane size={25} />
            <h1 className="font-bold text-lg ">Free worldwide shipping!</h1>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 z-50 w-full mx-auto py-3 px-3 bg-white md:hidden">
        <LetsGoButton className="w-full px-0" />
      </div>
    </div>
  );
}

export default Landing;
