import React from "react";
import RequestCard from "./RequestCard";

function RestaurantRequests({requests}){

    const onUpvoteClick = (restaurantId) => {
        fetch(`http://localhost:9292/restaurant-votes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                vote: 1,
                restaurant_request_id: restaurantId
            })
        })
            .then(r => r.json())
            .then(data => console.log(data))
}

    const renderRequests = requests.map(request => {
        const {id, name, location} = request;

        return(
            <RequestCard 
                key={id}
                id={id}
                name={name}
                location={location}
                onUpvoteClick={onUpvoteClick}
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