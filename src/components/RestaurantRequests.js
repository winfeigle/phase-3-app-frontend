import React from "react";
import RequestCard from "./RequestCard";

function RestaurantRequests({requests}){


    const renderRequests = requests.map(request => {
        const {id, name, location} = request;
        return(
            <RequestCard 
                key={id}
                id={id}
                name={name}
                location={location}
                />
        )
    })


    return(
        <div className="restaurant-requests-container">
            {renderRequests}
        </div>
    )

}

export default RestaurantRequests;