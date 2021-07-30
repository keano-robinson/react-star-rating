import React, { useState } from "react";

import StarRating from "./StarRating"; //Import StarRating component
import { makeStar } from "./Star"; //makeStar allows developers to make a custom 'star' icon

import { IoMdPlanet } from "react-icons/io"; //Import a svg from react-icons to make a custom 'star'

/* 
    An example of creating a custom 'star' using a fillable svg icon from react-icons.
    
    - The default icon is overridden from a star icon to a planet icon. 
    - The color of the icon when it is active (i.e. selected) is overridden from yellow to red. 
    - The color of the icon when it is inactive (i.e. unselected) is overridden from grey to black. 
    - The size of the icon is overriden from 20px to 50px.
    - The number of discrete divisions of the 'star' is overridden from 2 (allowing the user to adjust the rating in increments of 0.5) 
      to four (allowing thw user to adjust the rating in increments of 0.25)

    Parameters that are not overridden are left as default.

    This is used to override the default value of StarComponent of StarRating to the new 'star' icon, a planet icon.
*/

const Planet = makeStar({icon: IoMdPlanet, activeColor: "red", inactiveColor: "black", size: {value:"50", unit:"px"}, numberOfDivisions: 4});

export default function App() {
    const initialRating = 4.5; //Give the StarRating components an inital rating of 4.5 for demonstration purposes
    const [rating, setRating] = useState(initialRating); 
    const totalStars = 6;
    const decimalPrecision = 2;
    return (
        <div className="app-container">
            <div className="custom-star-component">
                <h3>Custom StarRating (Interactive Component)</h3>
                {StarRating({
                    rating, //0 by default
                    totalStars, //5 by default
                    clickable: true, //Makes StarRating interactive (false by default)
                    clickHandler: (newRating, _totalStars) => setRating(newRating), //Dynamically adjusts rating. These values are used in the paragraph below.
                        //When StarRating is clicked, clickHandler is called with the new rating and total number of 'stars' of the StarRating component
                    StarComponent: Planet, //A gold star with grey background by default
                    decimalPrecision //Adjusts the precision of the tooltip
                })}
                <p>
                    Rating: {rating.toFixed(decimalPrecision)} out of {totalStars.toFixed(decimalPrecision)}
                </p>
            </div>

            <div className="default-star-component">
                <h3>Default StarRating (Non-Interactive Component)</h3>
                <StarRating rating={initialRating} />
                <p>
                    Rating: {initialRating} out of 5.0
                </p>
            </div>
        </div>
    );
}