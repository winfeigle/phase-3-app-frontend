import React, {useState} from "react";

function RestaurantCard({restaurant}){
    const {id, name, address, tag} = restaurant;

    return(
        <div className="card">
            <h2><b>{name}</b></h2>
            <p className="tag">{tag}</p>
        </div>
    );

}

export default RestaurantCard;