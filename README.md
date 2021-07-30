# ⚛️ StarRating Component for React

Created: 29/07/2021

## Description: 

A react UI component that displays star ratings. The StarRating component is intended For use with [react-icons](https://react-icons.github.io/react-icons). You may copy and paste The `Star.js` and `StarRating.js` modules in your React project's `src` folder to use these component. Follow the 
[example](#example) below to see how to use the components. A live demo of this project, displaying the [example](#example) shown below, can be viewed [here](https://react-star-rating-demo.netlify.app).

## Features:
- `StarRating` diplays a graphical representation of ratings given as numerical values
- `StarRating` can dynamically update the rating displayed in response to user interaction
- The 'star' icon is configurable: The icon svg, the fill colours when selected and unselected, the size, and the precision to which the user can adjust the rating via the component can be altered with the `makeStar` function of `Star.js`. By importing `makeStar` function from `Star.js`, a 'star' can be created to meet the developer's needs; this 'star' can then be passed as a prop to the `StarRating` component to override its default 'star'.
- The `StarRating` component is configurable: the total number of 'stars' displayed (default 5 'stars), the initial rating displayed (default 0), the interactivity of the component (`StarRating` is not clickable by default), this 'star' icon used (a star by default), and the decimal precision of the tooltip that is displayed when hovering over the component (2 decimal places by default) are all configurable.
- `StarRating` can pass user ratings to parent component through its `clickHandler` function. When `StarRating` is clicked, the `clickHandler` function is called with the user's rating and the total number of 'stars' of the `StarRating` component (i.e. `clickHandler(rating, totalStars)`). Supplying a `clickHandler` method to `StarRating` will give you access to these parameters from a parent, React component.

## <a id="example"></a>Example:
Here is the code that was used to produce the demo. This shows the content of App.js. The file structure of the project is as shown in [GitHub](https://github.com/keano-robinson/react-star-rating) repository.

``` javascript
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

    This is used to override the default value of StarComponent to the new 'star' icon, a planet icon.
*/

const Planet = makeStar({icon: IoMdPlanet, activeColor: "red", size: {value:"50", unit:"px"}, numberOfDivisions: 4});

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
                    StarComponent: Planet, //Overrides default star icon with a planet icon (default: gold star with grey background)
                    decimalPrecision //Adjusts the precision of the tooltip, figures are given to 1 decimal place by default
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
```
## API:
***To do***

## External Dependencies:
- React
- ReactDOM
- Webpack (module bundler for demo)
- [react-icons](https://react-icons.github.io/react-icons/)

## Project Inspiration:
> [react-rating-star-component](https://www.npmjs.com/package/react-rating-stars-component)