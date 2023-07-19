function TaskHeader(){
    return(
        <div className="flex items-center justify-between mt-6">
            <div className="flex justify-between ">
                <div className="text-[#000000] font-bold text-base ">
                    Current Tasks
                </div>
                <div className="text-[#000000 text-md font-regular "> 
                Done 30%
                </div>
            </div>
                <div className="border border-[#f6f6f6] rounded-3xl bg-white text-[#6D7179] flex justify-between align-center items-center px-2 py-1 space-x-2 ">
                    <div className="text-sm font-thin">Week</div>
                    <div className="w-2 h-2 bg-green-500 border border-white rounded-full"></div>
                </div>
        </div>
    );}

export default TaskHeader;