import React, { useState } from "react";

import StarRating from "./StarRating"; //Import StarRating component
import { makeStar } from "./Star"; //makeStar allows developers to make a custom 'star' icon

import { IoMdPlanet } from "react-icons/io"; //Import a fillable svg from react-icons to make a custom 'star'

/* 
    An example of creating a custom 'star' using a fillable svg icon from react-icons.
    Here, the default icon is overridden from a star icon to a planet icon. The color of the icon when it is active (i.e. selected)
    is overridden from yellow to red. And the size of the icon is overriden from 20px to 50px.

    All other parameters are left as default: 
     - The inactive color of the icon (grey) 
     - The number of discrete divisions of the icon (4 divisions by default, indicating that the user can adjust ratings in increments of 0.25)

    This is used to override the default value of StarComponent to the new 'star' icon, a baseball icon.
*/

const Planet = makeStar({icon: IoMdPlanet, activeColor: "red", size: {value:"50", unit:"px"}, numberOfDivisions: 4});

export default function App() {
    const [rating, setRating] = useState(4.5); //Give the app an inital rating of 4.5 for demonstration purposes
    const totalStars = 5;
    const decimalPrecision = 2;
    return (
        <div className="app-container">
            {StarRating({
                initalRating: rating, //0 by default
                totalStars, //5 by default
                clickable: true, //Makes StarRating interactive (false by default)
                clickHandler: (newRating, _totalStars) => setRating(newRating), //Dynamically adjusts rating. These values used in the paragraph below.
                     //When StarRating is clicked, clickHandler is called with the new rating and total number of 'stars' of the StarRating component
                StarComponent: Planet, //A gold star with grey background by default
                decimalPrecision //Adjusts the precision of the tooltip
            })}
            <p>
                Rating: {rating.toFixed(decimalPrecision)} out of {totalStars.toFixed(decimalPrecision)}
            </p>
        </div>
    );
}