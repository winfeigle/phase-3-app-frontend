import React, {useState} from "react";
import MealPlans from "./MealPlans";

function RestaurantCard({restaurant}){
    let {id, name, address, tag, logo_url, image_url, bio} = restaurant;

    const [mealPlans, setMealPlans] = useState(restaurant.meal_plans);
    

    const sumSubscribers = () => {
        let counter = 0;
        mealPlans.map(plan => {
            counter = counter + plan.subscribers
            return counter;
        })
        return counter;
    }

    const [subscriberCount, setSubscriberCount] = useState(sumSubscribers);

    const updateMealPlans = () => {
        fetch(`http://localhost:9292/restaurants/${id}`)
        .then(res => res.json())
        .then(data => setMealPlans(data.meal_plans))
    }


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
            .then(updateMealPlans)
            .then(setSubscriberCount((subscriberCount) => subscriberCount + 1))
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
                    <b>{subscriberCount}&nbsp;</b><p>Subscribers</p>
                </span>
                <span className="address">{address}</span>  
                <span className="bio">{bio}</span>  
            </div>
            <MealPlans
                mealPlans={mealPlans}
                addSubscriber={onAddSubscriber}
                updateMealPlans={updateMealPlans}
                />
        </div>
    );

}

export default RestaurantCard;