import React from "react";
import { Link } from "react-router-dom";

function LetsGoButton({ className }) {
  return (
    <Link to="/addPhoto">
      <button
        className={`${className} text-center font-bold text-lg text-white px-[120px] py-4 rounded-xl bg-[#eb2371] hover:bg-pink-600 duration-300 mb-6`}
      >
        Let`s Go
      </button>
    </Link>
  );
}

export default LetsGoButton;
