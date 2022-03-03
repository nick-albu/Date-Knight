import './Events.scss'
import eventsArr from '../../data/events.json'
import React, { useState } from "react";

function Events() {

    const [eventDropdown, setEventDropdown] = useState(false);
    const [eventChoice, setEvent] = useState({});
    
    return (
        <div className='events'>
            <div className="events___dropdownContainer">
                <div>
                <button onClick={() => {setEventDropdown(!eventDropdown); setEvent({})}} className="events__dropdownButton">Choose what we should do</button>
                <button onClick={() => {
                    setEventDropdown(false);
                    setEvent(eventsArr[Math.floor(Math.random() * eventsArr.length)])
                    }} className="events__randomButton">Jesus take the wheel</button>
                </div>
                {eventDropdown && (
                    <div className="events__dropdownContent">
                        {eventsArr.map((event)=>(
                            <button onClick={() => {
                                setEventDropdown(!eventDropdown); 
                                setEvent(eventsArr.find(function(option, index) {
                                    if (option.name === event.name)
                                        return event.name
                                }))
                            }} className='events__drowdownItem' href="">{event.name}</button>
                        ))}
                    </div>
                )}
                {eventChoice && (
                    <div>
                        <p>{eventChoice.name}</p>
                        <p>{eventChoice.details}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Events;