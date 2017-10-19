import React from 'react';
import TrashIcon from "../assets/images/trash-icon.png";

const CategoryItem = (props) => {
  console.log(props.category);
  return (
    <div>
      <li className="category-item">
        <h3>
          {props.category}
        </h3>
      <button
        className="delete-category"
        onClick={() => props.deleteCategory(props.category)}
      >
          <img className="trash-icon" src={TrashIcon} alt="trash" />
        </button>
        </li>
    </div>
  );
};

export default CategoryItem;
