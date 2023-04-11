import { useState, useEffect } from 'react'

const useOnline = () => {

    // console.log('useOnline');

    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {

        // console.log('useEffect')

        const handleOnline = () => {
            setIsOnline(true)
            console.log(1);
        }

        const handleOffline = () => {
            setIsOnline(false)
        }

        window.addEventListener("online", handleOnline)

        window.addEventListener("offline", handleOffline)

        return ()=>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }

    },[])



    return isOnline
}


export default useOnline