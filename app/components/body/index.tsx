
import i18n from "../../../public/translation/i18n.json";
function Body({children}:{children: React.ReactNode}){
    return(
        <main className="flex-grow h-screen pb-12 mt-6 overflow-y-auto mx-28 no-scrollbar" >
            <div className="flex flex-col items-start mb-4 ">
                <div className="flex items-center justify-between w-full">
                <div className="font-sans text-2xl font-extrabold text-[#00000F]">{i18n.helloUser}</div>
                
                <div className="flex flex-row items-center space-x-2 ">  
                
                <div className="font-sans text-sm font-regular text-[#7F8490]">13 June, 2023</div>
                <div className="w-12 h-12 rounded-full border-2 border-white bg-[#F1F2F3]"></div>
                
                 </div>
                
                </div>
                
                <div className="font-sans text-sm font-regular text-[#BBBBBB]">{i18n.messageTracker}</div>
            </div>
            
            {children}
      
           
            
        </main>
    );
}

export default Body;