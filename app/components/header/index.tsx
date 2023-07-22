export default function Header({text}:{text:string}){
    return (
        <div className= "fixed z-10 w-full">
            <div className="top-0 px-5 font-sans text-lg font-bold flex-nowrap">
                <nav className="flex items-center justify-between w-full h-[54px]">
                    <div className="font-sans text-lg md:text-2xl font-semibold text-[#13162B] flex-shrink-0 ">
                        {text}
                    </div>
                </nav>
            </div>
        </div>
    );
}