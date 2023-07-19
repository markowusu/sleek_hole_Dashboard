import { ChangeEventHandler } from "react";

function Input({type,value,onChange,description,cls,name,errorMessage}:{type:string,value:string,onChange?:ChangeEventHandler<HTMLInputElement>,description:string,cls?:string,name:string, errorMessage?: string}){
   
    return(
        <>
        <label className="block mb-2 text-sm font-normal text-gray-700">
            {name}
        </label>
        <input type={type} id="email" name="email" className={`w-full px-3 py-1 text-gray-700 border rounded-md ${cls}`} placeholder={description} value={value} onChange={onChange}/>
        <p className="my-2 font-sans text-base font-normal text-red-500 ">
            {errorMessage}
            </p>
        </>
    );
}
export default Input;