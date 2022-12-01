import React from "react";

function MealPlans({mealPlans}){


    const renderMealplan = mealPlans.map(plan => {
        const {id, name, number_of_meals } = plan;
        return(
            <div key={id} className="mealplan-card">
                {`${name} Feedplan: ${number_of_meals} meals`}
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