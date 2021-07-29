import React from "react";
import { FaStar } from "react-icons/fa";

/*
partiallyShowIcon: A function that partially hides a portion of an icon horizontally using a visibility parameter, 
where 1 indicates that the component is completely visible and 0 indicates that a component is completely hidden;
*/
const partiallyShowIcon = (icon = null, iconSize={value: undefined, unit: undefined}, visibility = 1) => {
 //Add type checking on visibility, iconSize.value and iconSize.unit
 return (
    <div style={{overflow: 'hidden', width: (Number(iconSize.value) * visibility) + iconSize.unit, position: 'absolute'}}>
        {icon}
    </div> 
 )
}

export const makeStar = ({ activeColor = "gold", inactiveColor = "grey", size={value:'20', unit:'px'}} = {}) => (
    ({value = 0}) => (
        <div className="star-container" style={{display:"inline-block", posiiton:"relative"}}>
            {
                partiallyShowIcon(
                    <FaStar className="foreground-star" color={ value ? activeColor : inactiveColor } size={size.value + size.unit} />,
                    size,
                    value,
                )
            }
            <FaStar className="background-star" color={inactiveColor}  size={size.value + size.unit}/>
        </div>
    )
);

export const Star = makeStar();

export default { Star, makeStar }