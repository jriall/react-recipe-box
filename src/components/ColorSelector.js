import React from 'react';
import PropTypes from 'prop-types';

const ColorSelector = (props) => {
  const colors = ['Blue', 'Green', 'Yellow', 'Purple'];
  const menuItems = colors.map((color, index) => {
    return (
      <p
        onClick={() =>props.changeColor(color)}
        key={index}
      >
        {color}
      </p>
    );
  });
  return (
    <div className="dropdown">
      <button className="dropbtn">Select Color Scheme</button>
      <div className="dropdown-content">
        {menuItems}
      </div>
    </div>
  );
};

export default ColorSelector;

ColorSelector.propTypes = {
  changeColor: PropTypes.func.isRequired,
};
