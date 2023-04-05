import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("isLoggedIn: ", isLoggedIn);

  return (
    <div className="header">
      <div className="log">
        <Link to="/">
          <h1>Swiggy</h1>
        </Link>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Log out{" "}
              </button>
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
    </div>
  );
};
