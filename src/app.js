import React from "react";
import ReactDOM from "react-dom/client";
// import Body from "../components/body";


const Header = () => {
    return (
        <div className="header">
            <div className="log">
                <h1>SWIGGY</h1>
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kybcmsvsxu3rff3dxisn" />
            <h6>4 ratings</h6>
            <h3>Title</h3>
            <h5>Tags</h5>
            <p>Descritpitor</p>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="cards">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}


const Footer = () => {

}


const AppLayout = () => {
    return (
        <React.Fragment >
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<AppLayout />)