import './Events.scss'

function Events() {
    // I need to pull data from json files and map through the food options to create links for
    // the dropdown list.
    return (
        <div className='events'>
            <div class="events___dropdown">
                <button onclick="myFunction()" class="events__dropdownButton">Choose an Activity</button>
                <div class="events__dropdownContent">
                    <a href="#home">Option 1</a>
                    <a href="#about">Option 2</a>
                    <a href="#contact">Option 3</a>
                </div>
            </div>
        </div>
    )
}

export default Events;