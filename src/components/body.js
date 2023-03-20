import { useState } from "react"
import { RestaurantList } from "../constants"
import { RestaurantCard } from "./RestaurantCard"

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurants) => restaurants.data.name.toLowerCase().includes(searchText.toLowerCase()))
}
export const Body = () => {


    const [searchText, setSearchText] = useState()
    const [restaurants, setRestaurents] = useState(RestaurantList)

    return (
        <div className="container">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search..." value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }} />
                <button className="search-btn" onClick={() => {
                    const data = filterData(searchText, restaurants)
                    setRestaurents(data)
                }}>Search</button>

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