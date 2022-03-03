import './Attire.scss'
import attireArr from '../../data/attire.json'
import React, { useState } from "react";

function Attire() {

    const [attireDropdown, setAttireDropdown] = useState(false);
    const [attireChoice, setAttire] = useState({});
    
    return (
        <div className='attire'>
            <div className="attire___dropdownContainer">
                <div>
                <button onClick={() => {setAttireDropdown(!attireDropdown); setAttire({})}} className="attire__dropdownButton">Choose our attire</button>
                <button onClick={() => {
                    setAttireDropdown(false);
                    setAttire(attireArr[Math.floor(Math.random() * attireArr.length)])
                    }} className="attire__randomButton">Jesus take the wheel</button>
                </div>
                {attireDropdown && (
                    <div className="attire__dropdownContent">
                        {attireArr.map((attire)=>(
                            <button onClick={() => {
                                setAttireDropdown(!attireDropdown); 
                                setAttire(attireArr.find(function(option, index) {
                                    if (option.name === attire.name)
                                        return attire.name
                                }))
                            }} className='attire__drowdownItem' href="">{attire.name}</button>
                        ))}
                    </div>
                )}
                {attireChoice && (
                    <div>
                        <p>{attireChoice.name}</p>
                        <p>{attireChoice.details}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Attire;