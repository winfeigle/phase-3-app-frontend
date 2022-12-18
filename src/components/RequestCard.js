import React, {useEffect, useState} from "react";

function RequestCard({id, name, location}){
    const [voteCount, setVoteCount] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/restaurant-requests/${id}`)
          .then(res => res.json())
          .then((data) => setVoteCount(data.restaurant_votes.length));
      }, [id]);

    
      const handleUpvoteClick = (e) => {
        const restaurantId = e.target.value
        
        fetch(`http://localhost:9292/restaurant-requests/${id}`, {
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


    return(
        <div className="restaurant-request-card">
            <p><b>{name}</b> {location}</p>
                <span>
                    <button onClick={handleUpvoteClick} className="upvotes" value={id}>
                        {voteCount}⬆
                        </button>
                </span>
        </div>
    )

}

export default RequestCard;