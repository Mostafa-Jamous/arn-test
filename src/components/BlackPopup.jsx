import React from "react";

function BlackPopup({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed z-20 bg-black/50 w-screen h-[200vh] "
    ></div>
  );
}

export default BlackPopup;
