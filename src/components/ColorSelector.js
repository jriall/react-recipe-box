import React from "react";

const ColorSelector = (props) => {
  return (
    <div className="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <p>Blue</p>
        <p>Green</p>
        <p>Yellow</p>
        <p>Purple</p>
      </div>
    </div>
  )
}

export default ColorSelector;