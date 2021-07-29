import React from "react";
import { Star, makeStar } from "./Star.js";

export default function StarRating({ totalStars = 5, rating = 2.2 } = {}) {
    /*Function to turn a rating into an array of values for each star 
    (e.g. (totalStars=5, rating=3.3) --> [1, 1, 1, 0.3, 0, 0]) of total stars*/
    const createArray = (totalStars, rating) => [...Array(Math.floor(rating)).fill(1), rating % 1, ...Array(Math.floor(totalStars-rating)).fill(0)];

    return (
        <div className="star-rating" title={rating}>
            {createArray(totalStars, rating).map((v, i) => <Star key={i} value={v} />)}
        </div>
    );
}