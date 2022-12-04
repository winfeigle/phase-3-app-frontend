import React from "react";

function RestaurantRequests({requests}){

    const renderRequests = requests.map(r => {
        const {id, name, location} = r;
        return(
            <div key={id}>
                {`${name} – ${location}: ${r.request_votes.length} votes`}
            </div>
        )
    })


    return(
        <div>
            {renderRequests}
        </div>
    )

}

export default RestaurantRequests;