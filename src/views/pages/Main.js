import React from "react";
import LeftSidebar from "../components/shared/LeftSidebar";
import Self from "./profiles/Self";

const Main = () => {
  return (
    <div>
      <div className="container-main py-5">
        <div className="w-64 bg-white shadow-xl h-screen fixed top-0 left-0 p-3">
          <LeftSidebar />
        </div>
        <div className="pl-60">
          <Self />
        </div>
      </div>
    </div>
  );
};

export default Main;
