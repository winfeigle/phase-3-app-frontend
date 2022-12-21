import React, { useEffect, useState } from "react";
import MealPlans from "./MealPlans";

function RestaurantCard({restaurant}){
    let {id, name, address, tag, logo_url, image_url, bio, subscribers} = restaurant;
    const [mealPlans, setMealPlans] = useState([]);
    const [newSubscriber, setNewSubscriber] = useState(subscribers);

    useEffect(() => {
        fetch(`http://localhost:9292/restaurants/${id}`)
            .then(res => res.json())
            .then(data => {
                setMealPlans(data.meal_plans)
            })
      }, [id]);

      const onSubscribe = (mealPlanId) => {
        // console.log(mealPlanId)
        fetch(`http://localhost:9292/restaurants/meal-plans/${mealPlanId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "subscribers": subscribers++
            })
        })
            .then(res => res.json())
            .then(data => setNewSubscriber(parseInt(data.subscribers) + 1))
      }

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
                    <b>{`${newSubscriber}`}&nbsp;</b><p>Subscribers</p>
                </span>
                <span className="address">{address}</span>  
                <span className="bio">{bio}</span>  
            </div>
            <MealPlans
                mealPlans={mealPlans}
                onSubscribe={onSubscribe}
                />
        </div>
    );

}

export default RestaurantCard;