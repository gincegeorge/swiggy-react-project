import { RestaurantList } from "../constants"
import { RestaurantCard } from "./RestaurantCard"

export const Body = () => {
    return (
        <div className="body">
            <div className="cards">
                {
                    RestaurantList.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} />
                    })
                }
            </div>
        </div>
    )
}