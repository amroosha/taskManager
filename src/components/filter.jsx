import DropDownButton from './dropDownbutton'
import exampleImage from "../assets/filter.png";
import '../css/filter.css'
function Filter(props) {

    return (
        <div id='filter-container'>
            <img src = {exampleImage} id="filter-icon" />
            <p id="filter-text">Filter</p>
            <DropDownButton />
        </div>    
    )
}

export default Filter