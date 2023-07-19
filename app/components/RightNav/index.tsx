"use client"
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";
import { ChatInput} from "../chat";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import i18n from "../../../public/translation/i18n.json";
import Card from "../card";


function RightNav({children}:{children: React.ReactNode}){
  const [collapse, setCollapse] = useState(false);

    
  return (
    <nav
      className={classNames("flex  flex-col top-0 w-72 h-screen border-2 right-0  border-[#F8F7F8] ")}>
       <Card styles="mx-auto mt-2 h-[210px]">
        <div className="flex flex-col items-center justify-center h-full ">
        <div className="relative w-16 h-16 bg-[#FFEECE] rounded-full  border-[1px] border-white">
  {/* Online status dot */}
            <div className="absolute bottom-[2px] right-[13px] w-3 h-3 bg-[#FE737C] rounded-full border-[1px] border-white "></div>
        </div>
            <div className="text-[#5B5D62] font-semibold font-sans text-sm my-1">Morgan Nortion</div>
            <div className="text-[#C3C3C3] text-sm font-thin ">morgannortion@gmail.com</div>
            <div className="flex items-center px-2 my-4 space-x-4 justify-evenly">
        <div className="w-10 h-10 bg-white border-2 border-white rounded-full"></div>
        <div className="w-10 h-10 bg-white border-2 border-white rounded-full"></div>
        <div className="w-10 h-10 bg-white border-2 border-white rounded-full"></div>
        </div>
       
        </div>
       </Card>

       {children}
      
      <ChatInput/>
    </nav>
  );
}

export default RightNav;
