import React, {useState} from "react";

function RequestCard({id, name, location, onUpvoteClick}){
    const [voteCount, setVoteCount] = useState([])

    fetch(`http://localhost:9292/restaurant-votes/${id}`)
          .then(res => res.json())
          .then(setVoteCount);
      
    
      const handleUpvoteClick = (e) => {
        setVoteCount(parseInt(e.target.value) + 1)
        

        onUpvoteClick(id)
      }


    return(
        <div className="restaurant-request-card">
            <p><b>{name}</b> {location}</p>
                <span>
                    <button onClick={handleUpvoteClick} className="upvotes" value={voteCount}>
                        {voteCount}⬆
                        </button>
                </span>
        </div>
    )

}

export default RequestCard;