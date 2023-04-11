import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/body";
import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Contact from "./pages/Contact.jsx";
import RestaurantMenu from "./components/RestaurentMenu";
import { ShimmerNew } from "./components/ShimmerNew.jsx";
import UserContext from "./utils/UserContext.js";

const Instamart = lazy(() => import("./pages/Instamart.jsx"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Gince George",
    email: "hi@gince.in",
  });

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerNew />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
