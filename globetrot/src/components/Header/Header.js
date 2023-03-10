import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Flyout from "./Flyout";



function Header() {
  

  return (
    <header className="sticky top-0 z-40">
      <div className=" grid grid-cols-3 bg-white shadow-lg px-10 md:px-20">
        {/* Left */}
        <div className="relative flex items-center h-20 cursor-pointer my-auto ">
          <Image
            src="/GlobeTrot.png"
            alt="GlobeTrot Logo"
            fill="true"
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>

        {/* Middle */}
        <div className="flex items-center  my-auto  md:border-2 rounded-full h-10  py-2 md:shadow-sm">
          <input
            type="text"
            className="flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm"
            placeholder="Start your search here"
          ></input>
          <SearchIcon className="hidden md:inline-flex h-8 flex-shrink-0 bg-blue-500 p-2 text-white rounded-full cursor-pointer md:mx-auto" />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-700">
          <p className="hidden md:inline-block cursor-pointer"> Host Your Place </p>
          <HomeIcon className=" invisible md:visible h-6 cursor-pointer" />
          <Flyout />
        </div>
      </div>
    </header>
          
  );
}

export default Header;
