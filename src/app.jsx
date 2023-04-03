import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/body";
import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Contact from './pages/Contact.jsx'
import RestaurantMenu from "./components/RestaurentMenu";

const AppLayout = () => {
    return (
        <React.Fragment >
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurent/:id",
                element: <RestaurantMenu />
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<RouterProvider router={appRouter} />)