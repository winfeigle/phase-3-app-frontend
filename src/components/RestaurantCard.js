import React from "react";
import MealPlans from "./MealPlans";

function RestaurantCard({restaurant}){
    const {id, name, address, tag, logo_url} = restaurant;

    return(
        <div className="restaurant-card">
            <p className="tag">{tag}</p>
            <div className="restaurant-logo-container">
                <img className="restaurant-logo" src={logo_url} alt="Restaurant logo"/>
                <h2><b>{name}</b></h2>
            </div>
            <div className="restaurant-image">
                {/* <img> PLACE IMAGE HERE </img> */}
            </div>
            <p className="address">{address}</p>
            <MealPlans restaurant={restaurant}/>
        </div>
    );

}

export default RestaurantCard;