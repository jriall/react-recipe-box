import React from 'react';

const NewCategoryInput = (props) => {

    return (
    <div className="new-category-input-div">
      <form onSubmit={props.addCategory}>
        <input
        className="category-input"
          placeholder="Enter Category"
          value={props.categoryInputContent}
          onChange={event => props.onCategoryInputChange(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewCategoryInput;
