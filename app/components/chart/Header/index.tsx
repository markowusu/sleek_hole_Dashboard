function ChartHeader(){
    return(
        <div className="flex items-center justify-between mt-6 align-center ">
            <div className="font-sans text-lg font-bold text-[#010214] ">
                Performance
            </div>
            <div className="border border-white rounded-3xl bg-[#f6f6f6]">
                <div className="flex items-center justify-between px-2 py-1 space-x-2">
                    <div className="text-[#c6c6c6] text-sm">
                      01-07 May
                    </div>
                <div className="w-2 h-2 bg-green-500 border border-white rounded-full"></div>
                </div>
            </div>

        </div>
    );
}

export default ChartHeader;