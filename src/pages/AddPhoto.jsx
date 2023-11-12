import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
import BlackPopup from "../components/BlackPopup";

function AddPhoto() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative h-screen w-full">
      {isOpen && (
        <>
          <div
            className={` top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] fixed z-30 bg-white h-[500px] w-[700px] duration-700`}
          ></div>
          <BlackPopup onClick={() => setIsOpen(false)} />
        </>
      )}
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <div
          onClick={() => setIsOpen(true)}
          className="addFlashing cursor-pointer bg-white rounded-full w-[180px] h-[180px] shadow-2xl flex justify-center items-center"
        >
          <ImPlus size={50} />
        </div>
        <h1 className="text-[#b5a7ac] text-center mt-6 text-2xl font-bold">
          Start Creating
        </h1>
      </div>
    </div>
  );
}

export default AddPhoto;
