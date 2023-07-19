function TaskElement(){
    return(
        <>
        <div className="flex items-center justify-between mt-4 align-center">
            <div className="flex flex-row items-center space-x-4 ">
            <div className="bg-yellow-100 border border-[#f6f6f6] w-10 h-10 rounded-full ">
            </div>
            <div className="text-xs font-sans text-[#0A0F1A] font-semibold">Finish Uncle Bobs Courses</div>
            </div>
            
            <div className="flex items-center space-x-2 align-center">
                <div className="bg-red-200 border border-[#f6f6f6] w-2 h-2 rounded-full"></div>
                <div className="text-xs text-[#0A0F1A] font-semibold font-sans"> in progress</div>
            </div>

            <div className="flex items-center space-x-2 align-center">
                <div className="bg-[#f6f6f6] border border-[#f6f6f6] w-2.5 h-2.5 rounded-full"></div>
                <div className="text-xs text-[#0A0F1A] font-semibold font-sans">4h</div>
            </div>
            
            <span className="pb-3 text-base font-bold text-[#0A0F1A]">
                    ...
            </span>
        </div>
        </>
    );
}

export default TaskElement;