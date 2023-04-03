import { useState, useEffect as Effect } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { ShimmerNew } from "./ShimmerNew"
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurants) => restaurants.data.name.toLowerCase().includes(searchText.toLowerCase()))
}
export const Body = () => {

    const [allRestaurents, setAllRestaurent] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filteredRestaurants, setfilteredRestaurants] = useState([])

    Effect(() => {
        console.log('before API CALL ');
        getRestaurents()
        console.log('after API CALL');
    }, [])

    const getRestaurents = async () => {
        try {
            console.log('API call');
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&page_type=DESKTOP_WEB_LISTING")

            const jsonData = await data.json()

            setAllRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards)
            setfilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards)

        } catch (error) {
            console.log('erororrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
        }
    }

    console.log('render');

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
                            console.log(restaurant.data.id);
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