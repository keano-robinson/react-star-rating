# ⚛️ StarRating Component for React

Created: 29/07/2021

## Description: 

A demo of a react UI component that displays Star Ratings. The StarRating component is intended For use with [react-icons](https://react-icons.github.io/react-icons). You may copy and paste The `Star.js` and `StarRating.js` modules in your React project's `src` folder to use these component (see the API section below).

## Features:
- `StarRating` diplays a graphical representation of ratings given as numerical values
- `StarRating` can dynamically update the rating displayed in response to user interaction
- The 'star' icon is configurable: The icon svg, the fill colours when selected and unselected, the size, and the precision to which the user can adjust the rating via the component can be altered with the `makeStar` function of `Star.js`. By importing `makeStar` function from `Star.js`, a 'star' can be created to meet the developer's needs; this 'star' can then be passed as a prop to the `StarRating` component to override its default 'star'.
- The `StarRating` component is configurable: the total number of 'stars' displayed (default 5 'stars), the initial rating displayed (default 0), the interactivity of the component (`StarRating` is not clickable by default), this 'star' icon used (a star by default), and the decimal precision of the tooltip that is displayed when hovering over the component (2 decimal places by default) are all configurable.
- `StarRating` can pass user ratings to parent component through its `clickHandler` function. When `StarRating` is clicked, the `clickHandler` function is called with the user's rating and the total number of 'stars' of the `StarRating` component (i.e. `clickHandler(rating, totalStars)`). Supplying a `clickHandler` method to `StarRating` with give you access to these parameters from a parent, React component.

## API:
***To do***

## Examples:
***To do***

## Instructions To Build Demo:
***To do***

## External Dependencies:
- React
- ReactDOM
- Webpack (for demo)
- react-icons

## Project Inspiration:
> [react-rating-star-component](https://www.npmjs.com/package/react-rating-stars-component)