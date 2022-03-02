import './Food.scss'
import React, { useEffect, useState } from "react";

function Food() {
    const [visible, setVisibility] = useState(false);

    // I need to pull data from json files and map through the food options to create links for
    // the dropdown list.
    

    
    return (
        <div className='food'>
            <div className="food___dropdownContainer">
                <button onClick={() => setVisibility(!visible)} class="food__dropdownButton">Choose our food</button>
                {visible && (
                    <div className="food__dropdownContent">
                        <a className='food__drowdownItem' href="#home">Option 1</a>
                        <a className='food__drowdownItem' href="#about">Option 2</a>
                        <a className='food__drowdownItem' href="#contact">Option 3</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Food;