import './Food.scss'
function Food() {
    // I need to pull data from json files and map through the food options to create links for
    // the dropdown list.
    return (
        <div className='food'>
            <div class="food___dropdown">
                <button onclick="myFunction()" class="food__dropdownButton">Choose our food</button>
                <div class="food__dropdownContent">
                    <a href="#home">Option 1</a>
                    <a href="#about">Option 2</a>
                    <a href="#contact">Option 3</a>
                </div>
            </div>
        </div>
    )
}

export default Food;