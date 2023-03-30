import { useState } from "react"

export const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    console.log(isLoggedIn);

    return (
        <div className="header">
            <div className="log">
                <h1>Swiggy</h1>
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>{isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}}>Log out </button>:<button onClick={()=>{setIsLoggedIn(true )}}>Log in</button>}</li>
                </ul>
            </div>
        </div>
    )
}