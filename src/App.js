import React, { useState } from "react";

import StarRating from "./StarRating";
import { makeStar } from "./Star";

import { BiBaseball } from "react-icons/bi";

/* 
    An example of creating a custom 'star' using fillable svg icon.
    Here the default icon is overridden from a star icon to a baseball icon, the color of the icon when it is active (i.e. selected)
    is overridden from yellow to red, and the size of the icon is overriden from 20px to 50px.
    All other parameters are left as default: The inactive color of the icon and the number of discrete divisions of the icon.

    This is used to override the default value of StarComponent to the new 'star' icon, a baseball icon.
*/
const Baseball = makeStar({icon: BiBaseball, activeColor: "red", size: {value:"50", unit:"px"}});

export default function App() {
    const [rating, setRating] = useState(4.5); //Give the app an inital rating of 4.5 for demonstration purposes
    const totalStars = 5;
    const decimalPrecision = 2;
    return (
        <div className="app-container">
            {StarRating({
                initalRating: rating,
                totalStars,
                clickable: true,
                clickHandler: (newRating, _totalStars) => setRating(newRating),
                StarComponent: Baseball,
                decimalPrecision
            })}
            <p>
                Rating: {rating.toFixed(decimalPrecision)} out of {totalStars.toFixed(decimalPrecision)}
            </p>
        </div>
    );
}