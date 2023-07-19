function OpenTable(){
    return (
            <div className="mt-10 border-t-[1px]  border-b-[1px] border-[#EEEEEE]">
              <div className="grid grid-cols-3">
                <div className="flex items-start justify-center border-r-[1px] border-[#EEEEEE]">
                <div className="flex items-center my-4 mr-6 space-x-4">
                    <div className="w-12 h-12 bg-[#F0F0F0] border border-white rounded-full"></div>
                    <div className="flex flex-col">
                        <div className="text-[#5E6168] text-sm font-regular">
                        Finished
                        </div>
                        <div className="text-[#5E6168] text-sm font-regular">
                        18
                        </div>
                    </div>
                        </div>
                </div>
                <div className="flex items-center justify-center  text-black border-[#EEEEEE]">
                <div className="flex items-center my-4 space-x-4">
                    <div className="w-12 h-12 bg-[#F0F0F0] border border-white rounded-full"></div>
                    <div className="flex flex-col">
                        <div className="text-[#5E6168]  text-sm font-regular">
                        Tracked
                        </div>
                        <div className="text-[#5E6168] text-sm font-regular">
                        31h
                        </div>
                    </div>
                        </div>
                </div>
                <div className="flex items-center justify-center text-black border-l-[1px] border-[#EEEEEE]">
                <div className="flex items-center my-4 ml-6 space-x-4">
                    <div className="w-12 h-12 bg-[#F0F0F0] border border-white rounded-full"></div>
                    <div className="flex flex-col">
                        <div className="text-[#5E6168] text-sm font-regular">
                        Efficiency
                        </div>
                        <div className="text-[#5E6168] text-sm font-regular">
                        93%
                        </div>
                    </div>
                        </div>
                </div>
                </div>


               {/* <div className="grid grid-cols-3">
                <div className="border border-gray-500">
                    <div className="flex">
                    <div className="w-10 h-10 border border-white rounded-full bg-gray"></div>
                    <div className="flex flex-col">
                        <div>
                        Finished
                        </div>
                        <div>
                        18
                        </div>
                    </div>
                        </div>
                    </div>
                   
                </div>
                <div className="text-black border border-gray-500">Column 2</div>
                <div className="text-black border border-gray-500">Column 3</div> */}
                </div>
    );
}

export default OpenTable;