import React, { useEffect, useState } from "react";
import MealPlans from "./MealPlans";

function RestaurantCard({restaurant}){
    const {id, name, address, tag, logo_url, image_url} = restaurant;
    const [mealPlans, setMealPlans] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/restaurants/${id}`)
            .then(res => res.json())
            .then(data => {
                setMealPlans(data.meal_plans)
            })
      }, [id]);

    return(
        <div className="restaurant-card">
            <p className="tag">{tag}</p>
            <div className="restaurant-logo-container">
                <img className="restaurant-logo" src={logo_url} alt="Restaurant logo"/>
                <h2><b>{name}</b></h2>
            </div>
            <div className="restaurant-image-container">
                <img src={image_url} alt="Restaurant storefront"/>
            </div>
            <p className="address">{address}</p>
            <MealPlans 
                mealPlans={mealPlans}
                />
        </div>
    );

}

export default RestaurantCard;