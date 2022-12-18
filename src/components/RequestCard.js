import React, {useState} from "react";

function RequestCard({id, name, location, upvotes, downvotes, onUpdateRequests}){
    const [votes, setVotes] = useState({
        "upvotes": upvotes,
        "downvotes": downvotes
})

    const handleVoteClick = (e) => {
        let userVote = e.target.className
        
        setVotes((votes) => {
            userVote === "upvotes" ? votes.upvotes++ : votes.downvotes++;
        })

        fetch(`http://localhost:9292/restaurant-requests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(votes)
        })
            .then(response => response.json())
            .then((updatedRequest) => {
                onUpdateRequests(updatedRequest)
            })

    }


    return(
        <div className="restaurant-request-card">
            <p><b>{name}</b> {location}</p>
                <span>
                    <button onClick={handleVoteClick} className="upvotes" value={upvotes}>
                        {votes.upvotes}⬆
                        </button>
                    <button onClick={handleVoteClick} className="downvotes" value={downvotes}>
                        {votes.downvotes}⬇
                        </button>
                </span>
        </div>
    )

}

export default RequestCard;