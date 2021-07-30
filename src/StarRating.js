import React, { useState } from "react";

import { Star } from "./Star.js";


export default function StarRating({ totalStars = 5, rating = 0, clickable = false, clickHandler = f => f, StarComponent=Star, decimalPrecision=2, style={}, ...props } = {}) {
    //Using React's useState hook to manage state
    const [dynamicRating, setDynamicRating] = useState(rating);

    /*Function to turn a rating into an array of values for each star of total stars
    (e.g. (totalStars=5, rating=3.3) --> [1, 1, 1, 0.3, 0, 0])*/
    const createArray = (totalStars, rating) => [
        ...Array(Math.floor(dynamicRating)).fill(1), 
        ...Array(Math.ceil(dynamicRating % 1)).fill(rating % 1), 
        ...Array(Math.floor(totalStars-dynamicRating)).fill(0)
    ];

    const handleRating = (rating) => {
        if (clickable) {
            clickHandler(rating, totalStars);
            setDynamicRating(rating);
        } else {
            //do nothing
        }
    }

    return (
        <div className="star-rating" title={dynamicRating.toFixed(decimalPrecision)} style={{...style}} {...props}>
            {
                createArray(totalStars, rating).map((v, i) => 
                    <StarComponent 
                        key={i} 
                        value={v} 
                        onSelect={(thisStarValue) => handleRating(i + thisStarValue)} />)
            }
        </div>
    );
}