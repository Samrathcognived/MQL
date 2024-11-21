import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeMobileCompoType } from "../../redux/slice/Slice";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Physical Activity");

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    dispatch(changeMobileCompoType(option === "Physical Activity" ? 1 : 2));
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption}{" "}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="dropdown-options">
          <div
            className="dropdown-option"
            onClick={() => handleOptionClick("Physical Activity")}
          >
            Physical Activity
          </div>
          <div
            className="dropdown-option"
            onClick={() => handleOptionClick("Mental Activity")}
          >
            Mental Activity
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
