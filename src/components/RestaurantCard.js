import React, {useState} from "react";
import MealPlans from "./MealPlans";

function RestaurantCard({restaurant}){
    let {name, address, tag, logo_url, image_url, bio, meal_plans} = restaurant;

    const sumSubscribers = () => {
        let counter = 0;
        meal_plans.forEach(plan => {
            counter = counter + plan.subscribers
            return counter;
        })
        return counter;
    }

    const [subscriberCount, setSubscriberCount] = useState(sumSubscribers());

    const onAddSubscriber = (mealPlanId, currentSubs) => {
        fetch(`http://localhost:9292/meal-plans/${mealPlanId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                subscribers: currentSubs + 1
            })
        })
            .then(res => res.json())
            .then(setSubscriberCount((subscriberCount) => subscriberCount++))
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
                    <b>{`${meal_plans.length}`}&nbsp;</b><p>Meal Plans</p>
                    <b>{subscriberCount}&nbsp;</b><p>Subscribers</p>
                </span>
                <span className="address">{address}</span>  
                <span className="bio">{bio}</span>  
            </div>
            <MealPlans
                mealPlans={meal_plans}
                addSubscriber={onAddSubscriber}
                />
        </div>
    );

}

export default RestaurantCard;