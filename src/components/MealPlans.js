import React from "react";

function MealPlans({mealPlans}){

    // console.log(mealPlans)
    
    const renderMealPlans = mealPlans.map(plan => {
        const {id, name, number_of_meals } = plan;
        return(
            <div key={id}>
                <p>
                    {`${name} Meal Plan: ${number_of_meals} meals`}
                </p>
            </div>
        )
    })
    
    return(
        <div>
            {renderMealPlans}
        </div>
    )

}

export default MealPlans;