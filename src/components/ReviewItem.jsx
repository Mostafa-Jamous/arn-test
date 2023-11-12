import React from "react";

function ReviewItem({ image, description, name }) {
  return (
    <div className="bg-white">
      <img src={image} alt="" />
      <div className="py-[15px] px-[18px] text-[15px] ">
        <h1 className="mb-6 text-[#2b0514]">{description}</h1>
        <h2 className="text-[#808080]">{name}</h2>
      </div>
    </div>
  );
}

export default ReviewItem;
