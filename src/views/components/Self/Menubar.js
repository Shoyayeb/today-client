import React from "react";

const Menubar = ({ menuicons, setActiveMenu, activeMenu }) => {
  return (
    <div className="custom-shadow-sm my-2 mt-6 pt-3 px-4 rounded-lg">
      {menuicons?.map((menu, index) => (
        <button
          onClick={() => setActiveMenu(menu.link)}
          className={`pb-3 border-b-2 px-3 text-center inline-block ${
            activeMenu === menu.link
              ? "border-primary-600 text-primary-600"
              : "text-primary-400 border-white"
          }`}
          key={index}
        >
          {menu.title}
        </button>
      ))}
    </div>
  );
};

export default Menubar;
