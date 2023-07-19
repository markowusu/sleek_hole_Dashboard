function CardButton({cls="", text,onClick }:{cls?:string, text:string, onClick?:any}){
    return(
        <div className={`mx-6 text-black border rounded-md  shadow-md h-[36px] border-gray-300  px-12 py-4  flex justify-center items-center align-middle hover:shadow-lg hover:bg-slate-100 ${cls}`} role="button" onClick={onClick}> 
        <p className="text-center">{text}</p>
    </div>
    );
}
export default CardButton;

