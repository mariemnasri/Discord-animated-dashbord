import React from "react";

import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
const SideBar = () => {
  return (
    <div
      className="fixed 
                    top-0 
                    left-0 
                    h-screen 
                    w-16 
                    m-0 
                    flex 
                    flex-col 
                    bg-gray-900 
                    text-white 
                    shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} text="tooltip 🔥  " />
      <SideBarIcon icon={<BsPlus size="32" />} text="tooltip ➕ " />
      <SideBarIcon
        icon={<BsFillLightningFill size="20" />}
        text="tooltip ⚡  "
      />
      <SideBarIcon icon={<FaPoo size="20" />} text="tooltip 💩 " />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip hidden group-hover:block">{text}</span>
  </div>
);
export default SideBar;
