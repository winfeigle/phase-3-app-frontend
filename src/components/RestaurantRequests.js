import React from "react";
import RequestCard from "./RequestCard";
import RequestForm from "./RequestForm";

function RestaurantRequests({requests, deleteRequest, updateRequests}){

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

    const onUpdateRequests = (formData) => {
        const duplicateSearch = 
        requests.filter(request => {
            if(request.name.toLowerCase() === formData.name.toLowerCase() && request.location.toLowerCase() === formData.location.toLowerCase()){
                return true;
            } else return false;
        })

        const isDuplicate = duplicateSearch[0] !== undefined;

        if(!isDuplicate){
            fetch(`http://localhost:9292/restaurant-requests`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(newRequest => {
                    onUpvoteClick(newRequest.id)
                    updateRequests()
            })
        } else{
            alert("This restaurant has already been added, upvote it!")
        }
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
            <RequestForm 
                upvoteClick={onUpvoteClick}
                updateRequests={onUpdateRequests}
                />
            {renderRequests}
        </div>
    )

}

export default RestaurantRequests;