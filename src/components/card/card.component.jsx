import React from "react";
import "./card.styles.css"

export const Card = function(props){
    return( 
        <div className="card-container">
            <img  alt={`${props.monster.name ? props.monster.name:"monster"}`}   src={`https://robohash.org/${props.monster.id - 5}?set=set5&size=180x180`}/>

            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>

    )
}