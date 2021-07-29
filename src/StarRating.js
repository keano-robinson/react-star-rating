import React, { useState } from "react";

import { Star } from "./Star.js";


export default function StarRating({ totalStars = 5, initalRating = 0, clickable = false, clickHandler = f => f, StarComponent=Star, decimalPrecision=2 } = {}) {
    //Using React's useState hook to manage state
    const [rating, setRating] = useState(initalRating);

    /*Function to turn a rating into an array of values for each star 
    (e.g. (totalStars=5, rating=3.3) --> [1, 1, 1, 0.3, 0, 0]) of total stars*/
    const createArray = (totalStars, rating) => [
        ...Array(Math.floor(rating)).fill(1), 
        ...Array(Math.ceil(rating % 1)).fill(rating % 1), 
        ...Array(Math.floor(totalStars-rating)).fill(0)
    ];

    const handleRating = (rating) => {
        if (clickable) {
            clickHandler(rating, totalStars);
            setRating(rating);
        } else {
            //do nothing
        }
    }

    return (
        <>
            <div className="star-rating" title={rating.toFixed(decimalPrecision)}>
                {
                    createArray(totalStars, rating).map((v, i) => 
                        <StarComponent 
                            key={i} 
                            value={v} 
                            onSelect={(thisStarValue) => handleRating(i + thisStarValue)} />)
                }
            </div>
        </>
    );
}