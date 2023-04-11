export const ShimmerNew = () => {
    return (
        <>
            <div className="container mx-auto max-w-7xl p-10 bg-green-100 text-center">
                <div className="grid grid-cols-5 gap-y-6 gap-x-4">
                    {Array(15).fill("").map((elem,index) => <div key={index} className="bg-gray-300 w-full h-40"></div>)}
                </div>
            </div>
        </>
    )
}
