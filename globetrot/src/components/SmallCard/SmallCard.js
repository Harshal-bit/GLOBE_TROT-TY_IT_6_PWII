import React from "react";
import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex item-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-200 hover:scale-105 trasition transform duration-200 ease-in-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} className = "rounded-lg" fill="true" />
      </div>
      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className=" text-gray-500">{distance }</h3>
      </div>
    </div>
  );
}

export default SmallCard;
