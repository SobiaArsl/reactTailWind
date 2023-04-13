import React from "react";
import Searchbar from "../Searchbar";

export default function Down1() {
  return (
    <div className=" w-full bg-[#72917F]">
      <div className="pt-10  max-w-[1300px] mx-auto mr-30  px-4  text-center">
        <div className="mb-[73px]">
          <p className="text-xs"> Free Resturent Tools</p>
          <p className="mt-8 text-6xl text-white">  Menu Template<br /> Generator for Your<br /> Restaurant</p>
          <p className="mx-w-[535px] text-white h-28 mt-10   text-lg leading-7"> Whether you run an Italian restaurant or a
            burger joint, these free <br />restaurant menu
            templates will transform your mouthwatering <br />menu items into
            a complete restaurant menu optimised to help <br /> you get more orders. </p>
          <Searchbar />
        </div>
        <div className="mt-[73px] text-[transparent]" > . </div>
      </div>
    </div>
  );
}
