import { IMAGE_URL } from "../constants"

export const RestaurantCard = ({ name, avgRating, cuisines, cloudinaryImageId }) => {
    return (
        <div className="card">
            <img src={IMAGE_URL + cloudinaryImageId} />
            <h6>{avgRating} Stars</h6>
            <h4>{name}</h4>
            <p>Cuisines: {cuisines?.join(',')}</p>
        </div>
    )
}
