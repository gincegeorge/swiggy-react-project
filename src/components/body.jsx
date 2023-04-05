import { useState, useEffect as Effect } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { ShimmerNew } from "./ShimmerNew"
import { Link } from "react-router-dom";
import { RESTAURENT_LIST } from "../constants";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurants) => restaurants.data.name.toLowerCase().includes(searchText.toLowerCase()))
}
export const Body = () => {

    const [allRestaurents, setAllRestaurent] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filteredRestaurants, setfilteredRestaurants] = useState([])

    Effect(() => {
        getRestaurents()
    }, [])

    const getRestaurents = async () => {
        try {
            const data = await fetch(RESTAURENT_LIST)

            const jsonData = await data.json()

            setAllRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards)
            setfilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)

        } catch (error) {
            console.log(error);
        }
    }


    if (allRestaurents.length === 0) {
        return <ShimmerNew />
    }
    return (
        <div className="container">
            <div className="search-container">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const data = filterData(searchText, allRestaurents)
                    setfilteredRestaurants(data)
                }}>
                    <input type="text" className="search-input" placeholder="Search..." value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn" type="submit">Search</button>
                </form>

                <button className="reset-search-btn" onClick={() => {
                    setfilteredRestaurants(allRestaurents)
                    setSearchText("")
                }}>reset</button>

            </div>


            {(filteredRestaurants.length === 0) ?
                <div className="container">
                    <h1>No restaurant matches the search</h1>
                </div>
                :
                <div className="cards">
                    {
                        filteredRestaurants.map((restaurant) => {
                            return (
                                <Link to={"restaurent/" + restaurant.data.id} className="card">
                                    <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}