export const ShimmerNew = () => {
    return (
        <>
            <div className="container">
                <div className="cards">
                    {Array(10).fill("").map((elem,index) => <div key={index} className="shimmer-card"></div>)}
                </div>
            </div>
        </>
    )
}
