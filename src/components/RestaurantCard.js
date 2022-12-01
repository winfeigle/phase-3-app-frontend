import React, { useEffect, useState } from "react";
import MealPlans from "./MealPlans";

function RestaurantCard({restaurant}){
    const {id, name, address, tag, logo_url, image_url, bio, subscribers} = restaurant;
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
            <div className="restaurant-info-container">
                <span className="restaurant-stats">
                    <b>{`${mealPlans.length}`}&nbsp;</b><p>Meal Plans</p>
                    <b>{`${subscribers}`}&nbsp;</b><p>Subscribers</p>
                </span>
                <span className="address">{address}</span>  
                <span className="bio">{bio}</span>  
            </div>
            
            <MealPlans 
                restaurantName={name}
                mealPlans={mealPlans}
                />
        </div>
    );

}

export default RestaurantCard;