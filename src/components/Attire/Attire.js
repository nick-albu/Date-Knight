import './Attire.scss'
import attireArr from '../../data/attire.json'
import React, { useState } from "react";
import Random from '../../assets/images/random.png'

function Attire() {

    const [attireDropdown, setAttireDropdown] = useState(false);
    const [attireChoice, setAttire] = useState(null);
    
    return (
        <div className='attire'>
            <div className="attire__container">
                <div className="attire__buttonContainer">
                <button onClick={() => {setAttireDropdown(!attireDropdown); setAttire(null)}} className="attire__dropdownButton">Choose our attire</button>
                <img className='attire__randomIcon' src={Random} alt='dice icon' onClick={() => {
                    setAttireDropdown(false);
                    setAttire(attireArr[Math.floor(Math.random() * attireArr.length)])
                    }} />
                </div>
                {attireDropdown && (
                    <ul className="attire__dropdownContent">
                    {attireArr.map((attire)=>{
                        return (<li className='attire__dropdownItem' onClick={() => {
                            setAttireDropdown(!attireDropdown); 
                            setAttire(attireArr.find(function(option) {
                                if (option.name === attire.name){
                                    return attire.name
                                } else {
                                    return null
                                }
                            }))
                        }}>{attire.name}</li>)    
                    })}
                </ul>
                )}
                {attireChoice && (
                    <div className='attire__choiceContainer'>
                        <h2 className='attire__choiceName'>{attireChoice.name}</h2>
                        <p className='attire__choiceDetails'>{attireChoice.details}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Attire;