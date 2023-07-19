function ChatProfile() {
    return (
        <div className="flex items-center justify-between mx-4 mt-6">
            <div className="flex items-center space-x-2">
                
           
                <div className="relative border border-[#f6f6f6] bg-blue-100 w-12 h-12 rounded-full">
                <div className="absolute bottom-[1px] right-[5px]  w-[8px] h-[8px] bg-[#8EC27D] rounded-full border-[1px] border-white "></div>
                </div>
               
                
                
                <div className="flex flex-col space-y-1 ">
                    <div className="flex items-center justify-between">
                    <p className="font-sans text-sm font-semibold text-[#333542] ">Flyod Miles</p>
                    <div className="ml-[66px] text-xs text-[#B6B6B6] font-sans font-normal">10:15 AM</div>
                    </div>
                    
                    <p className="text-xs text-[#ABABAB] font-sans font-normal">Commented on <span className="text-[#A6C2D6]">Stack Project</span> </p>
                </div>
            </div>
        </div>
    )
}

export default ChatProfile;