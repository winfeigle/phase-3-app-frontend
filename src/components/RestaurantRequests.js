import React from "react";
import RequestCard from "./RequestCard";
import RequestForm from "./RequestForm";

function RestaurantRequests({requests, deleteRequest}){

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
}

    const renderRequests = requests.map(request => {
        const {id, name, location} = request;

        return(
            <RequestCard 
                key={id}
                id={id}
                name={name}
                location={location}
                upvoteClick={onUpvoteClick}
                deleteRequest={deleteRequest}
                />
        )
    })


    return(
        <div className="restaurant-requests-container">
            <h2 id="top-requests">Top Requests</h2>
            <RequestForm />
            {renderRequests}
        </div>
    )

}

export default RestaurantRequests;