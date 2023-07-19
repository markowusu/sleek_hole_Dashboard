function ChartCard ({children}:{children: React.ReactNode}){
    return(
        <>
        {children}
        <div className="border bg-[#f6f6f6] w-full h-64 mt-2"></div>
        </>
    );
}

export default ChartCard