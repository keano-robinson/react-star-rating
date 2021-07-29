# StarRating Component for React

Created: 29/07/2021

## Description: 

A demo of a react UI component that displays Star Ratings. The StarRating component is intended For use with [react-icons](https://react-icons.github.io/react-icons).

## Features:
- Diplays a graphical representation of ratings given as numerical values
- Can dynamically update the rating displayed in response to user interaction
- The 'star' icon is easily configurable. The icon svg, the fill colours when selected and unselected, the size and the precision to which the user can adjust the rating through the component can be altered with the makeStar function in Star.js
- StarRating can pass user ratings to parent component through its clickHandler function. The clickHandler function is called with the user's rating and the total number of 'stars' of the component (i.e. clickHandler(rating, totalStars)) when StarRating is clicked. Supplying a clickHandler method to StarRating with give you access to these parameters.

## API:
***To do***

## Instructions To Build Demo:
***To do***

## External Dependencies:
- React
- ReactDOM
- Webpack
- react-icons

## Project Inspiration:
> [react-rating-star-component](https://www.npmjs.com/package/react-rating-stars-component)