import './Events.scss'
import eventsArr from '../../data/events.json'
import React, { useState } from "react";
import Random from '../../assets/images/random.png'

function Events() {

    const [eventDropdown, setEventDropdown] = useState(false);
    const [eventChoice, setEvent] = useState(null);
    
    return (
        <div className='events'>
            <div className="events__container">
                <div className="events__buttonContainer">
                <button onClick={() => {setEventDropdown(!eventDropdown); setEvent(null)}} className="events__dropdownButton">Choose an activity</button>
                <img className='events__randomIcon' src={Random} alt='dice icon' onClick={() => {
                    setEventDropdown(false);
                    setEvent(eventsArr[Math.floor(Math.random() * eventsArr.length)])
                    }} />
                </div>
                {eventDropdown && (
                    <ul className="events__dropdownContent">
                    {eventsArr.map((event)=>{
                        return (<li className='events__dropdownItem' onClick={() => {
                            setEventDropdown(!eventDropdown); 
                            setEvent(eventsArr.find(function(option) {
                                if (option.name === event.name){
                                    return event.name
                                } else {
                                    return null
                                }
                            }))
                        }}>{event.name}</li>)    
                    })}
                    </ul>
                )}
                {eventChoice && (
                    <div className='events__choiceContainer'>
                        <h2 className='events__choiceName'>{eventChoice.name}</h2>
                        <p className='events__choiceDetails'>{eventChoice.details}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Events;