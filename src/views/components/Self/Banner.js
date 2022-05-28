import React from "react";

const Banner = () => {
  return (
    <div className="pb-16 shadow-xl shadow-primary-100 mt-20">
      <div className="">
        <div className="shadow-md rounded-md overflow-hidden w-full h-[250px]">
          <img
            className="w-full h-full min-h-full min-w-full object-cover"
            src="https://i.ibb.co/JyWkxGF/profile-bg.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-4">
        <div className="rounded-full -mt-16 ml-12 border-4 border-white shadow-md shadow-primary-100  overflow-hidden w-40 h-40">
          <img src="https://i.ibb.co/pzmcj9G/11.png" alt="" />
        </div>
        <div>
          <h1 className="text-4xl text-primary-200 font-normal">
            Asadullah Hil Galib
          </h1>
          <span>Mern Stack web and Mobile appliction developer</span>
        </div>
        <div>
          <button>Feed</button>
          <button>Activity</button>
          <button>Friends</button>
          <button>Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
