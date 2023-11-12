import React from "react";

function Container({ children }) {
  return (
    <div className="container w-[75%] max-xl:w-[80%] max-lg:w-[85%] max-md:w-[90%] max-sm:w-[95%] mx-auto">
      {children}
    </div>
  );
}

export default Container;
