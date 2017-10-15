import React from "react";

const NewItemInput = (props) => {
  return (
    <div className="new-item-input">
      <p>New Item Input</p>
      <form onSubmit={props.addItem}>
        <input
          placeholder="Enter Task"
          value={props.inputContent}
          onChange={event => props.onInputChange(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>

    </div>
  );
};

export default NewItemInput;
