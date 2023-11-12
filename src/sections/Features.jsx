import React from "react";
import FeaturesItem from "../components/FeaturesItem";

function Features() {
  return (
    <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 mb-12">
      <FeaturesItem
        image="https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/assets/illustrations/Hangin_Peel_No_Nails/No_Nails_01.png"
        title="No nails needed"
        description="Our frames stick to any wall"
      />
      <FeaturesItem
        image="https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/assets/illustrations/Shipping_Package/Plane_And_Earth_01.png"
        title="Free worldwide shipping!"
        description="At your doorstep in a week"
      />
      <FeaturesItem
        image="https://res.cloudinary.com/mixtiles/image/upload/f_auto,q_auto:good/assets/illustrations/Happy_Satisfaction/face_girl_01.png"
        title="Satisfaction guaranteed"
        description="Not satisfied? Get a full refund"
      />
    </div>
  );
}

export default Features;
