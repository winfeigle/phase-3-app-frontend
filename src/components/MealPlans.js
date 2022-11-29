import React from "react";

function MealPlans({mealPlans}){

    
    const renderSlides = mealPlans.map(plan => {
        return(
            <span key={plan.id} id={`slide-${mealPlans.indexOf(plan) + 1}`}>
            </span>
        )
    })
/*
    <div class="buttons">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    */

    const renderMealplan = mealPlans.map(plan => {
        const {id, name, number_of_meals } = plan;
        return(
            <div key={id} className="mealplan">
                <p className="mealplan-name">
                        {`${name} Feedplan:`}
                        </p>
                    <p className="mealplan-meals">
                        {`${number_of_meals} meals`}
                    </p>
            </div>
        )
    })
    
    return(
        <div className="mealplan-slider">
            {renderSlides}
            <div className="mealplan-container">
                {renderMealplan}
            </div>
        </div>
    )

}

export default MealPlans;