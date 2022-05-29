import React from "react";
import About from "./About/About";
import Activity from "./Activity/Activity";
import List from "./List/List";
import Profile from "./Profile/Profile";
import Self from "./Self/Self";
import Success from "./Success/Success";
import Today from "./Today/Today";

const ShowInfo = ({ activeMenu }) => {
  return (
    <div className="pb-20">
      <div className="grid grid-cols-6 gap-4 mt-4">
        <div className="col-span-2 custom-shadow-sm p-4 rounded-lg">
          Personalize
        </div>
        <div className="col-span-4">
          {activeMenu === "about" && <About />}
          {activeMenu === "profile" && <Profile />}
          {activeMenu === "success" && <Success />}
          {activeMenu === "activity" && <Activity />}
          {activeMenu === "self" && <Self />}
          {activeMenu === "today" && <Today />}
          {activeMenu === "list" && <List />}
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
