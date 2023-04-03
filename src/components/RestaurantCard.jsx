import { IMAGE_URL } from "../constants"

export const RestaurantCard = ({ name, avgRating, cuisines, cloudinaryImageId }) => {
    return (
        <div>
            <img src={IMAGE_URL + cloudinaryImageId} />
            <h6>{avgRating} Stars</h6>
            <h5 className="resTitle">{name}</h5>
            <p>Cuisines: {cuisines?.join(',')}</p>
        </div>
    )
}
