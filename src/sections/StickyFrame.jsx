import React from "react";
import vid from "../assets/videos/peel.365c8bc7.mp4";

function StickyFrame() {
  return (
    <div className="flex items-center justify-around max-md:flex-wrap-reverse px-9 bg-[#f2e9e9] gap-10">
      <div className="w-[40%] mx-auto max-md:w-[90%] max-md:pb-5 max-md:text-center">
        <h1 className="text-MainText font-bold text-4xl mb-5">
          The magic frame that sticks to any surface
        </h1>
        <p className="text-MainText text-lg font-semibold">
          Get your photos in stylish frames that stick directly to your wall and
          leave no damage behind
        </p>
      </div>
      <div className="flex justify-center items-center py-9 max-md:w-full">
        <video
          autoPlay
          loop
          playsInline
          className="rounded-xl"
          src={vid}
        ></video>
      </div>
    </div>
  );
}

export default StickyFrame;
