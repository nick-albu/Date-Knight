import './Food.scss'
import foodArr from '../../data/food.json'
import React, { useState } from "react";
import Random from '../../assets/images/random.png'

function Food() {

    const [foodDropdown, setFoodDropdown] = useState(false);
    const [foodChoice, setFood] = useState(null);
    
    return (
        <div className='food'>
            <div className="food__container">
                <div className="food__buttonContainer">
                    <button onClick={() => {setFoodDropdown(!foodDropdown); setFood(null)}} className="food__dropdownButton">Choose our food</button>
                    <img className='food__randomIcon' src={Random} alt='dice icon' onClick={() => {
                        setFoodDropdown(false);
                        setFood(foodArr[Math.floor(Math.random() * foodArr.length)])
                        }}/>
                </div>
                {foodDropdown && (
                    <ul className="food__dropdownContent">
                        {foodArr.map((food)=>{
                            return (<li className='food__dropdownItem' onClick={() => {
                                setFoodDropdown(!foodDropdown); 
                                setFood(foodArr.find(function(option) {
                                    if (option.name === food.name){
                                        return food.name
                                    } else {
                                        return null
                                    }
                                }))
                            }}>{food.name}</li>)    
                        })}
                    </ul>
                )}
                {foodChoice && (
                    <div className='food__choiceContainer'>
                        <h2 className='food__choiceName'>{foodChoice.name}</h2>
                        <p className='food__choiceDetails'>{foodChoice.details}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Food;