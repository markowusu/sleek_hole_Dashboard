import React from "react";
import { ImageProps } from "next/image";
import isNextImage from "../../utils/helper/isNextImage";
function CardButton({cls="", text,onClick , children}:{cls?:string, text:string, onClick?:any, children?: React.ReactElement<ImageProps>}){
    return(
        <div className={`mx-6 text-black border rounded-md  shadow-md h-[36px] border-gray-300  px-12 py-4  flex justify-center items-center align-middle hover:shadow-lg hover:bg-slate-100 ${cls}`} role="button" onClick={onClick}> 
        <div className="flex flex-row justify-center flex-shrink-0 space-x-6 align-center">
            {
                React.Children.map( children, (child)=>{
                    if (!isNextImage(child)) return;
                    return child
                })
            }
        <p className="text-center">{text}</p>
        </div> 
    </div>
    );
}
export default CardButton;



