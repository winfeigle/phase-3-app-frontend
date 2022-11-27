import React from "react";
import RestaurantCard from "./RestaurantCard";

function Restaurants({restaurants}){

    const renderRestaurants = restaurants.map(restaurant => {
        return(
            <RestaurantCard 
                key={restaurant.id}
                restaurant={restaurant}
                />
        )
    })

    return(
        <div id="restaurant-container">
            {renderRestaurants}
        </div>
    );
}

export default Restaurants;