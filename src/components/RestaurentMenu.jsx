import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGE_URL } from "../constants";
import { ShimmerNew } from "./ShimmerNew";
import useRestaurent from "../utils/useRestaurent";

const RestaurantMenu = () => {
  //getting restaurent id
  const { id } = useParams();

  const restaurant = useRestaurent(id);


  return !restaurant ? (
    <ShimmerNew />
  ) : (
    <>
      <div className="container mx-auto max-w-7xl p-10 bg-green-100 text-left">
        <div className="resWrap">
          <div className="resDetails">
            <div>Restaurent id: {id}</div>
            <img src={IMAGE_URL + restaurant.cloudinaryImageId} />
            <h2>{restaurant.name}</h2>
            <h4>Area: {restaurant.areaName}</h4>
            <h4>{restaurant.costForTwoMessage}</h4>
            <h4>Cusines: {restaurant.cuisines.join(",")}</h4>
            <br />
            <h4>
              Delivery in: {restaurant.sla.slaString},{" "}
              {restaurant.sla.lastMileTravelString} away
            </h4>
          </div>
          <div className="resMenu"></div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
