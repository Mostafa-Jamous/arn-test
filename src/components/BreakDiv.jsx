import React from "react";

function BreakDiv({ className }) {
  return (
    <div
      className={`${className} w-full block max-md:hidden bg-[#ebe7e7] h-[1px]  `}
    ></div>
  );
}

export default BreakDiv;
