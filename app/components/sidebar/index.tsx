"use client"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import UpgradeCard from "../upgradeCard";
import { useState } from "react";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import i18n from "../../../public/translation/i18n.json";
interface ISidebarProps {
  direction: "left" | "right";
  backgroundColor: string;
  textColor: string;
}

interface ISidebarItems {
  url: string;
  icon: FontAwesomeIconProps;
  text: string;
}

const menuItems = [
  {
    url: "/admin",
    icon: {
      icon: faHouse,
      mask: "database",
    },
    text: i18n.dashboard,
  }
  ,
  {
    url: "/admin",
    icon: {
      icon: faHouse,
      mask: "database",
    },
    text: i18n.members,
  },
  {
    url: "/admin",
    icon: {
      icon: faHouse,
      mask: "database",
    },
    text: "Product",
  },
  {
    url: "/admin",
    icon: {
      icon: faHouse,
      mask: "database",
    },
    text: "Teams",
  },
  {
    url: "/admin",
    icon: {
      icon: faHouse,
      mask: "database",
    },
    text: "Services",
  }
]

function Sidebar({right}:any) {
  const [collapse, setCollapse] = useState(false);
  return (
    <nav
      className={classNames("flex flex-col top-0 w-64 h-screen border-2 overflow-hidden  border-[#F8F7F8]",{"left-0": !right, "right-0": right})}>
        <div className="mt-6 mb-8 text-center">
            <span className="font-black font-sans text-3xl  text-[#13162B]">Logip</span>
        </div>
          
        {
          menuItems.map((item, index) => (
            <div  key={index} className="w-[72%] p-4 px-8 mt-1 text-[#8F8F8F]  hover:text-white hover:bg-black hover:border hover:border-gray-300 rounded-lg mx-auto text-center ">      
            <a
              href={item.url}
              className=""
            >
            <span className="font-regular">
                {item.text}
            </span>
            </a>
            </div>
          )) 
        }

        <UpgradeCard startGradient='#f6f6f6f6' styles='mx-6 mt-20 '/>

        <div className="absolute bottom-0 left-0 h-32 mx-8 mt-4 w-52">
            <div className="flex flex-col items-start justify-evenly text-[#808080]  mx-auto px-8 font-sans font-normal">
                
            <div className="mt-8">
                Help & Information
            </div>

            <div className="mt-4">
               Logout
            </div>
            </div> 
        </div> 

    </nav>
  );
}

export default Sidebar;
