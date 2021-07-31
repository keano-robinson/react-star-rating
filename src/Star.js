import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

/*
partiallyShowIcon: A function that partially hides a portion of an icon horizontally using a visibility parameter, 
where 1 indicates that the component is completely visible and 0 indicates that a component is completely hidden;
*/
const partiallyShowIcon = (icon = null, iconSize={value: undefined, unit: undefined}, visibility = 1) => {
 //To do: Add type checking on visibility, iconSize.value and iconSize.unit
 return (
    <div style={{overflow: 'hidden', width: (Number(iconSize.value) * visibility) + iconSize.unit, position: 'absolute'}}>
        {icon}
    </div> 
 );
}


/*
makeStar allows you to override some default properties of the Star component: the color, the size and the fillable svg icon representing the 'star'
*/
export const makeStar = ({ icon=FaStar, activeColor="gold", inactiveColor="grey", size={value:'20', unit:'px'}, numberOfDivisions=2, style={}, ...props} = {}) => (

    function ({value = 0, onSelect = f => f}) {
        const handleClick = e => {
            const {pageX: userInputValue, currentTarget: thisIcon} = e;
            const {left: minValue, width: valueRange} = thisIcon.getBoundingClientRect();

            const spanOfIconCovered = userInputValue - minValue;
            const iconDivisionWidth = valueRange / numberOfDivisions;
            const numberOfCoveredIconDivisions = Math.round(spanOfIconCovered / iconDivisionWidth);
            const newValue = numberOfCoveredIconDivisions / numberOfDivisions;

            onSelect(newValue)
        }

        return (
            <div className="star-container" style={{display:"inline-block", posiiton:"relative"}}>
                {
                    partiallyShowIcon(
                        React.createElement(
                            icon,
                            {
                                className:"foreground-icon",
                                color: activeColor,
                                size: size.value + size.unit,
                                style,
                                ...props,
                                onClick: (e) => handleClick(e) 
                            }
                        ), size,
                        value,
                    )
                }
                {
                    React.createElement(
                        icon,
                        {
                            className:"background-icon",
                            color: inactiveColor,
                            size: size.value + size.unit,
                            style,
                            ...props,
                            onClick: (e) => handleClick(e) 
                        }
                    )
                } 
            </div>
        )
    }
);

export const Star = makeStar();

export default { Star, makeStar };