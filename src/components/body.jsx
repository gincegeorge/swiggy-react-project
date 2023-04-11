import { useState, useEffect as Effect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { ShimmerNew } from "./ShimmerNew";
import { Link } from "react-router-dom";
import { RESTAURENT_LIST } from "../constants";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurants) =>
    restaurants.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
export const Body = () => {
  const [allRestaurents, setAllRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  Effect(() => {
    getRestaurents();
  }, []);

  const getRestaurents = async () => {
    try {
      const data = await fetch(RESTAURENT_LIST);

      const jsonData = await data.json();

      setAllRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards);
      setfilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };

  if (allRestaurents?.length === 0) {
    return <ShimmerNew />;
  }
  return (
    <div className="container mx-auto max-w-7xl p-10 bg-green-100 text-center">
      <div className="search-container">
        <div className="p-10 bg-sky-100 mb-10 border border-sky-200 inline-flex mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = filterData(searchText, allRestaurents);
              setfilteredRestaurants(data);
            }}
            className="flex mr-3"
          >
            <input
              type="text"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border
               border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none
               focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mr-2"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Search
            </button>
          </form>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setfilteredRestaurants(allRestaurents);
              setSearchText("");
            }}
          >
            reset
          </button>
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="container">
          <h1>No restaurant matches the search</h1>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-y-6 gap-x-4">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurent/" + restaurant.data.id}
                className="card"
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
