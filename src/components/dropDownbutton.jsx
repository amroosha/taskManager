import React, { useState } from "react";
import "../css/dropDownButton.css";

function DropDownButton() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu
  const [selectedOption, setSelectedOption] = useState("Day");

  const options = ["Day", "Weekly", "Monthly", "Yearly"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close menu after selecting an option
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleMenu}>
         {selectedOption}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDownButton;