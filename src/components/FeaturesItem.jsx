import React from "react";

function FeaturesItem({ image, title, description }) {
  return (
    <div className="text-center">
      <img className="mx-auto w-[100px] h-[100px] mb-3" src={image} alt="" />
      <h1 className="font-bold text-lg">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default FeaturesItem;
