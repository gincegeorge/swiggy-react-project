import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IMAGE_URL } from '../constants'
import { ShimmerNew } from './ShimmerNew'


const RestaurantMenu = () => {

    //getting restaurent id
    const { id } = useParams()

    const [restaurant, setRestaurent] = useState(null)

    useEffect(() => {
        getRestaurentInfo()
    }, [])

    async function getRestaurentInfo() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=${id}&submitAction=ENTER`)
            const jsonData = await data.json()

            console.log('data loaded');

            setRestaurent(jsonData.data.cards[0].card.card.info)

        } catch (err) {
            console.log(err);
        }
    }


    return !restaurant ? <ShimmerNew /> : (
        <>
            <div className='container'>
                <div className='resWrap'>
                    <div className='resDetails'>
                        <div>
                            Restaurent id: {id}
                        </div>
                        <img src={IMAGE_URL + restaurant.cloudinaryImageId} />
                        <h2>{restaurant.name}</h2>
                        <h4>Area: {restaurant.areaName}</h4>
                        <h4>{restaurant.costForTwoMessage}</h4>
                        <h4>Cusines: {restaurant.cuisines.join(',')}</h4>
                        <br />
                        <h4>Delivery in: {restaurant.sla.slaString}, {restaurant.sla.lastMileTravelString} away</h4>
                    </div>
                    <div className='resMenu'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu