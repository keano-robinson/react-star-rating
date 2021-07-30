# ⚛️ StarRating Component for React

Created: 29/07/2021

## Description: 

<<<<<<< HEAD
A React UI component that displays star ratings. The `StarRating` component is intended For use with [react-icons](https://react-icons.github.io/react-icons). You may copy and paste the `Star.js` and `StarRating.js` modules in your React project's `src` folder to use these component. Follow the 
[example](#example) below to see how to use the components. A live demo of this project can be viewed [here](https://keanorobinson.netlify.app/react-star-rating).
=======
A React UI component that displays star ratings. The `StarRating` component is intended for use with [react-icons](https://react-icons.github.io/react-icons). You may copy and paste the `Star.js` and `StarRating.js` modules into your React project's `src` folder to use these components. Follow the 
[example](#example) below to see how to use the components. A live demo of this project can be viewed [here](https://react-star-rating-demo.netlify.app).
>>>>>>> 7967c966b3f7e1a419ebdf874d307a1fb5643af5

## Features:
- `StarRating` diplays a graphical representation of ratings given as numerical values.
- `StarRating` can dynamically update the rating displayed in response to user interaction.
- The 'star' icon is configurable: The icon svg, the fill colours when selected and unselected, the size, and the precision to which the user can adjust the rating via the component can be altered with the `makeStar` function of `Star.js`. By importing `makeStar` function from `Star.js`, a 'star' can be created to meet the developer's needs; this 'star' can then be passed as a prop to the `StarRating` component to override its default 'star'.
- The `StarRating` component is configurable: the total number of 'stars' displayed (default 5 'stars), the initial rating displayed (default 0), the interactivity of the component (`StarRating` is not clickable by default), this 'star' icon used (a star by default), and the decimal precision of the tooltip that is displayed when hovering over the component (2 decimal places by default) are all configurable.
- `StarRating` can pass user ratings to parent component through its `clickHandler` function. When `StarRating` is clicked, the `clickHandler` function is called with the user's rating and the total number of 'stars' of the `StarRating` component (i.e. `clickHandler(rating, totalStars)`). Supplying a `clickHandler` method to `StarRating` will give you access to these parameters from a parent, React component.

## <a id="example"></a>Example:
<<<<<<< HEAD
The code below was used to produce the demo. This shows the content of App.js. The file structure of the project is as shown in the [GitHub](https://github.com/keano-robinson/react-star-rating) repository. A live demo of this example can be viewed [here](https://keanorobinson.netlify.app/react-star-rating).
=======
Here is the code that was used to produce the demo. This shows the content of App.js. The file structure of the project is as shown in the [GitHub](https://github.com/keano-robinson/react-star-rating) repository. A live demo of this example can be viewed [here](https://react-star-rating-demo.netlify.app).
>>>>>>> 7967c966b3f7e1a419ebdf874d307a1fb5643af5

``` javascript
import React, { useState } from "react";

import StarRating from "./StarRating"; //Import StarRating component
import { makeStar } from "./Star"; //makeStar allows developers to make a custom 'star' icon

import { IoMdPlanet } from "react-icons/io"; //Import a svg from react-icons to make a custom 'star'

/* 
<<<<<<< HEAD
    An example of creating a custom 'star' using a fillable svg icon from react-icons.
    
    - The default icon is overridden from a star icon to a planet icon. 
    - The color of the icon when it is active (i.e. selected) is overridden from yellow to red. 
    - The color of the icon when it is inactive (i.e. unselected) is overridden from grey to black. 
    - The size of the icon is overriden from 20px to 50px.
    - The number of discrete divisions of the 'star' is overridden from 2 (allowing the user to adjust the rating in increments of 0.5) 
      to four (allowing thw user to adjust the rating in increments of 0.25)
=======
    An example of creating a custom 'star' using a svg icon from react-icons.
    Here, the default icon is overridden from a star icon to a planet icon. The color of the icon when it is active (i.e. selected)
    is overridden from yellow to red. And the size of the icon is overriden from 20px to 50px.
>>>>>>> 7967c966b3f7e1a419ebdf874d307a1fb5643af5

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
```
App.js is rendered using ReactDOM in index.js.

## API:
***To do***

## External Dependencies:
- React
- ReactDOM
- Webpack (module bundler for demo)
- [react-icons](https://react-icons.github.io/react-icons/)

## Project Inspiration:
> [react-rating-star-component](https://www.npmjs.com/package/react-rating-stars-component)
