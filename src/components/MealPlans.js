import React from "react";

function MealPlans({restaurant}){
    
    
    return(
        <div>
            {/* This is running twice... */}
            {console.log(`${restaurant.name} Meal Plans running...`)}
        </div>
    )

}

export default MealPlans;