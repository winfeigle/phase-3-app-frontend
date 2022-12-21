import React, {useState} from "react";

function RequestCard({id, name, location, onUpvoteClick, onDeleteRequest}){
    const [voteCount, setVoteCount] = useState([])

    fetch(`http://localhost:9292/restaurant-requests/count/${id}`)
          .then(res => res.json())
          .then(setVoteCount);
      
    
      const handleUpvoteClick = (e) => {
        setVoteCount(parseInt(e.target.value) + 1)
        onUpvoteClick(id)
      }

      const handleDownvoteClick = () => {
        fetch(`http://localhost:9292/restaurant-requests/votes/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(remaining_votes => {
                if(remaining_votes > 0){
                    setVoteCount(remaining_votes)
                } else {
                    onDeleteRequest(id)
                }
            })
      }


    return(
        <div className="restaurant-request-card">
            <span className="restaurant-info">
                <h3>{name}</h3>
                <p>({location})</p>
            </span>
            <span className="restaurant-voting">
                <button onClick={handleUpvoteClick} className="upvotes" value={voteCount}>
                    {voteCount}⬆
                    </button>
                <button className="downvote" onClick={handleDownvoteClick}>
                    ⬇
                    </button>
            </span>
        </div>
    )

}

export default RequestCard;