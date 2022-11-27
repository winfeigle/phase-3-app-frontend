import React, {useState} from "react";

function RestaurantCard({restaurant}){
    const {id, name, address, tag} = restaurant;

    return(
        <div>
            <p>
            {id}
            {name}
            {address}
            {tag}
            </p>
        </div>
    );

}

export default RestaurantCard;