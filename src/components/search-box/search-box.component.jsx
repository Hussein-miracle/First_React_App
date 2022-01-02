import React from "react";

import "./search-box.styles.css";
                                //note:here we can use props too, but decided to destructor it
export const SearchBox = function({ placeholder , handleChange}){
    // console.log(props)

    return (
        
            <input  className="search" type="search" placeholder = { placeholder}  onChange = {handleChange} />
        
    )
}