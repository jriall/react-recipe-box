import React from "react";

const ColorSelector = (props) => {
  const colors = ["Blue", "Green", "Yellow", "Purple"];
  const menuItems = colors.map((color, index) => <p onClick={() =>props.changeColor(color)} key={index}>{color}</p>);
  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        {menuItems}
      </div>
    </div>
  )
}

export default ColorSelector;