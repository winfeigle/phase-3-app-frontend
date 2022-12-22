import React from "react";

function MealPlans({mealPlans, addSubscriber}){

    const handleSubscribeClick = (e) => {
        const mealPlanId = e.target.value
        addSubscriber(mealPlanId)
    }


    const renderMealplan = mealPlans.map(plan => {
        const {id, name, number_of_meals, price } = plan;
        return(
            <div key={id} className="mealplan">
                <div className="mealplan-card">
                    <div className="mealplan-price">
                        <b>{`$${price}.00`}</b>
                    </div>
                    <div className="mealplan-info">
                        <span className="mealplan-name">
                            {`${name} Feedplan`}
                        </span>
                        <span className="mealplan-meals">
                            {`${number_of_meals} meals`}
                        </span>
                    </div>
                </div>
                
                <div className="mealplan-subscribe">
                    <button onClick={handleSubscribeClick} value={id}>Subscribe</button>
                </div>
            </div>
        )
    })
    
    return(
        <div id="mealplans-container">
            {renderMealplan}
        </div>
    )

}

export default MealPlans;