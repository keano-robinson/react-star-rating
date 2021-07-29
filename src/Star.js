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
export const makeStar = ({ icon=FaStar, activeColor="gold", inactiveColor="grey", size={value:'20', unit:'px'}, numberOfDivisions=4} = {}) => (

    function ({value = 0, onSelect = f => f}) {
        const [tempValue, setTempValue] = useState(value)

        const handleMouseMove = e => {
            const {pageX: userInputValue, currentTarget: relatedIcon} = e;
            const {left: minValue, width: valueRange} = relatedIcon.getBoundingClientRect();
            const userInputOffset = 3; //Technicality: the surrounding div has a slight offset to the image which this helps correct for
            const iconCovered = (userInputValue + userInputOffset - minValue);
            const iconDivisionWidth = valueRange/ numberOfDivisions;
            const numberOfCoveredIconDivisions = Math.round(iconCovered / iconDivisionWidth);
            const newTempValue = numberOfCoveredIconDivisions / numberOfDivisions;

            setTempValue(newTempValue);
        }

        return (
            <div className="star-container" onMouseMove={e => handleMouseMove(e)} style={{display:"inline-block", posiiton:"relative"}}>
                {
                    partiallyShowIcon(
                        React.createElement(
                            icon,
                            {
                                className:"foreground-icon",
                                color: activeColor,
                                size: size.value + size.unit,
                                onClick: () => onSelect(tempValue)
                            }
                        ),
                        size,
                        value,
                    )
                }
                {
                    React.createElement(
                        icon,
                        {
                            className:"background-star",
                            color: inactiveColor,
                            size: size.value + size.unit,
                            onClick: () => onSelect(tempValue)
                        }
                    )
                } 
            </div>
        )
    }
);

export const Star = makeStar();

export default { Star, makeStar };