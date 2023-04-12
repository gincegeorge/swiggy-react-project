import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../constants";
import { ShimmerNew } from "./ShimmerNew";
import useRestaurent from "../utils/useRestaurent";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  //getting restaurent id
  const { id } = useParams();
  const restaurant = useRestaurent(id);

  const dispatch = useDispatch();

  const addFoodItem = (food) => {
    dispatch(addItem(food));
  };
  return !restaurant ? (
    <ShimmerNew />
  ) : (
    <>
      <div className="container mx-auto max-w-7xl p-10 bg-green-100 text-left">
        <div className="flex">
          <div className="resDetails px-5"> 
            <img
              src={
                IMAGE_URL +
                restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
              }
            />
          </div>
          <div className="resDetails">
            <div>Restaurent id: {id}</div>
            <h2 className="font-bold text-2xl my-2">
              {restaurant?.cards[0]?.card?.card?.info?.name}
            </h2>
            <h4>Area: {restaurant?.cards[0]?.card?.card?.info?.areaName}</h4>
            <h4>{restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
            <h4>
              Cusines:{" "}
              {restaurant?.cards[0]?.card?.card?.info?.cuisines?.join(",")}
            </h4>
            <br />
            <h4 className="font-bold">
              Delivery in:{" "}
              {restaurant?.cards[0]?.card?.card?.info?.sla?.slaString},{" "}
              {
                restaurant?.cards[0]?.card?.card?.info?.sla
                  ?.lastMileTravelString
              }{" "}
              away
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-y-6 gap-x-4 mt-10">
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (menu) => {
              return (
                <div
                  className="bg-green-200 my-2 p-4"
                  key={menu?.card?.info?.id}
                >
                  <div className="mb-2">
                    <img src={IMAGE_URL + menu?.card?.info?.imageId} alt="" />
                  </div>
                  <div>
                    {menu?.card?.info?.name}
                    <div />
                    <div>Rs:{menu?.card?.info?.price / 100}</div>
                    <button
                      onClick={() => addFoodItem(menu?.card?.info)}
                      className="bg-slate-800 text-white px-4 py-1 mt-1"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
