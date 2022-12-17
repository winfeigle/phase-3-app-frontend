import React from "react";

function RequestCard({id, name, location, upvotes, downvotes, onVoteClick}){


    return(
        <div className="restaurant-request-card">
                <p><b>{name}</b> {location}</p>
                <span>
                    <button onClick={onVoteClick} className="upvote">
                        {`${upvotes} ⬆`}
                        </button>
                    <button onClick={onVoteClick} className="downvote">
                        {`${downvotes} ⬇`}
                        </button>
                </span>
            </div>
    )

}

export default RequestCard;