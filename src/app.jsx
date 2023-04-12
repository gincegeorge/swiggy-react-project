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
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./pages/Cart.jsx";

const Instamart = lazy(() => import("./pages/Instamart.jsx"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Gince George",
    email: "hi@gince.in",
  });

  return (
    <>
      <Provider store={store}>
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
      </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
