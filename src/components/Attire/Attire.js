import './Attire.scss'

function Attire() {
    // I need to pull data from json files and map through the food options to create links for
    // the dropdown list.
    return (
        <div className='attire'>
            <div class="attire___dropdown">
                <button onclick="myFunction()" class="attire__dropdownButton">Choose how we dress</button>
                <div class="attire__dropdownContent">
                    <a href="#home">Option 1</a>
                    <a href="#about">Option 2</a>
                    <a href="#contact">Option 3</a>
                </div>
            </div>
        </div>
    )
}

export default Attire;