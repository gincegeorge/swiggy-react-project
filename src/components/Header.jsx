import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onlineStatus = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex mx-auto max-w-7xl p-10 mb-5 align-middle justify-between bg-red-50">
      <div className="logo">
        <Link to="/">
          <h1 className="text-3xl font-bold">Swiggy</h1>
        </Link>
      </div>
      <div className="nav-bar">
        <ul className="flex align-middle">
          <li className="px-2 ">
            <Link className="inline-block align-middle" to="/">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link className="inline-block align-middle" to="/about">
              About
            </Link>
          </li>
          <li className="px-2">
            <Link className="inline-block align-middle" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-2">
            <Link className="inline-block align-middle" to="/instamart">
              Instamart
            </Link>
          </li>
          <li className="px-2">
            <Link className="inline-block align-middle font-bold " to="/cart">
              Cart ({cartItems.length} items)
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        <li className="px-2">
          {onlineStatus ? "🟢" : "🔴"}
          {isLoggedIn ? (
            <>
              <span className="mr-2 text-sm font-bold">{user.name}</span>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Log out{" "}
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Log in
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
