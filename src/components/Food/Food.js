import './Food.scss'
import foodArr from '../../data/food.json'
import React, { useState } from "react";

function Food() {

    const [dropdown, setDropdown] = useState(false);
    const [choice, setChoice] = useState({});
    
    return (
        <div className='food'>
            <div className="food___dropdownContainer">
                <button onClick={() => {setDropdown(!dropdown); setChoice({})}} className="food__dropdownButton">Choose our food</button>
                {dropdown && (
                    <div className="food__dropdownContent">
                        {foodArr.map((food)=>(
                            <button onClick={() => {
                                setDropdown(!dropdown); 
                                setChoice(foodArr.find(function(option, index) {
                                    if (option.name === food.name)
                                        return food.name
                                }))
                            }} className='food__drowdownItem' href="">{food.name}</button>
                        ))}
                    </div>
                )}
                {choice && (
                    <div>
                        <p>{choice.name}</p>
                        <p>{choice.details}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Food;