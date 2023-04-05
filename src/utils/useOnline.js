import { useState, useEffect } from 'react'

useEffect(() => {
    cosnt[isOnline, setIsOnline] = useState(true)

    const handleOnline = () => {
        setIsOnline(true)
    }

    const handleOffline = () => {
        setIsOnline(false)
    }

    window.addEventListener("online", handleOnline)

    window.addEventListener("offline", handleOffline)

})

export default useOnline