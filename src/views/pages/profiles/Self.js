import React, { useState } from "react";
import { menuicons } from "../../../assets/menu.js";
import Banner from "../../components/Self/Banner";
import Menubar from "../../components/Self/Menubar.js";
import ShowInfo from "../../components/Self/ShowInfo/ShowInfo.js";
const Self = () => {
  const [activeMenu, setActiveMenu] = useState(`${menuicons[0]?.link}`);
  console.log(activeMenu);
  return (
    <div>
      <div>
        <Banner />
        <Menubar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          menuicons={menuicons}
        />
        <ShowInfo activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default Self;
