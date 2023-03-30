import { useState, useEffect } from "react"
import { RestaurantList } from "../constants"
import { RestaurantCard } from "./RestaurantCard"
import { Shimmer } from "./shimmer"

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurants) => restaurants.data.name.toLowerCase().includes(searchText.toLowerCase()))
}
export const Body = () => {

    const [searchText, setSearchText] = useState('')
    const [restaurants, setRestaurents] = useState([])

    console.log(restaurants.length, '----------------');

    useEffect(() => {
        getRestaurents()
    }, [])

    const getRestaurents = async () => {
        try {
            console.log('API call');
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&page_type=DESKTOP_WEB_LISTING")
            const jsonData = await data.json()

            setRestaurents(jsonData?.data?.cards[2]?.data?.data?.cards)
        } catch (error) {
            console.log(error);
        }
    }

    console.log('render');

    // return (
    return (restaurants.length === 0) ? <Shimmer /> : (
        <div className="container">
            <div className="search-container">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const data = filterData(searchText, restaurants)
                    setRestaurents(data)
                }}>
                    <input type="text" className="search-input" placeholder="Search..." value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn" type="submit">Search</button>
                </form>

                <button className="reset-search-btn" onClick={() => {
                    setRestaurents(RestaurantList)
                    setSearchText("")
                }}>reset</button>

            </div>
            <div className="cards">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} />
                    })
                }
            </div>
        </div>
    )
}