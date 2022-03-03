import './Food.scss'
import foodArr from '../../data/food.json'
import React, { useState } from "react";

function Food() {

    const [foodDropdown, setFoodDropdown] = useState(false);
    const [foodChoice, setFood] = useState({});
    
    return (
        <div className='food'>
            <div className="food___dropdownContainer">
                <div>
                <button onClick={() => {setFoodDropdown(!foodDropdown); setFood({})}} className="food__dropdownButton">Choose our food</button>
                <button onClick={() => {
                    setFoodDropdown(false);
                    setFood(foodArr[Math.floor(Math.random() * foodArr.length)])
                    }} className="food__randomButton">Jesus take the wheel</button>
                </div>
                {foodDropdown && (
                    <div className="food__dropdownContent">
                        {foodArr.map((food)=>(
                            <button onClick={() => {
                                setFoodDropdown(!foodDropdown); 
                                setFood(foodArr.find(function(option, index) {
                                    if (option.name === food.name)
                                        return food.name
                                }))
                            }} className='food__drowdownItem' href="">{food.name}</button>
                        ))}
                    </div>
                )}
                {foodChoice && (
                    <div>
                        <p>{foodChoice.name}</p>
                        <p>{foodChoice.details}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Food;