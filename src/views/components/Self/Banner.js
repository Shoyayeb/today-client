import React, { useState } from "react";
import { menuicons } from "../../../assets/menu";
const Banner = () => {
  console.log(menuicons);
  const [shadowActive, setShadowActive] = useState();
  return (
    <div className="pb-4 shadow-xl shadow-primary-100 mt-20 rounded-b-lg">
      <div className="">
        <div className="shadow-md rounded-md overflow-hidden w-full h-[250px]">
          <img
            className="w-full h-full min-h-full min-w-full object-cover"
            src="https://i.ibb.co/JyWkxGF/profile-bg.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-4 gap-5">
        <div className="flex items-center gap-4">
          <div className="rounded-full -mt-16 ml-6 border-4 border-white shadow-md shadow-primary-100  overflow-hidden w-40 h-40">
            <img src="https://i.ibb.co/pzmcj9G/11.png" alt="" />
          </div>
          <div className="-mt-8 max-w-[405px] p-1">
            <h1 className="text-4xl text-primary-200 font-normal">
              Asadullah Hil Galib
            </h1>
            <span className="text-primary-400">
              Mern Stack web and Mobile appliction developer
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 -mt-8">
          <button className="py-2 px-3 text-primary-300 bg-primary-500 rounded-md">
            Feed
          </button>
          <button className="py-2 px-3 text-primary-300 bg-primary-500 rounded-md">
            Activity
          </button>
          <button className="py-2 px-3 text-primary-300 bg-primary-500 rounded-md">
            Friends
          </button>
          <button className="py-2 px-3 text-primary-300 bg-primary-500 rounded-md">
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
