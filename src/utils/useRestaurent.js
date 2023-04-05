import { useEffect, useState } from "react";
import { RESTAURENT_DATA_URL } from '../constants.js'
const useRestaurent = (resId) => {

    const [Restaurent, setRestaurent] = useState(null)

    useEffect(() => {
        getRestaurentInfo(resId)
    }, [])


    async function getRestaurentInfo(id) {
        try {
            const data = await fetch(RESTAURENT_DATA_URL + id)
            const jsonData = await data.json()

            console.log('data loaded');

            setRestaurent(jsonData.data.cards[0].card.card.info)

        } catch (err) {
            console.log(err);
        }
    }

    
    return Restaurent
}

export default useRestaurent

