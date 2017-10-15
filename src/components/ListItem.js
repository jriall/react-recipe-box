import React from "react";

const ListItem = (props) => {
  return (
    <div>
    <li className="list-item" onClick={() => props.handleComplete(props.item, props.list)}>
      {props.list === "completedList" ? <strike>{props.item[0]}</strike> : <p>{props.item[0]}</p>}
    </li>
      <button className="delete-list-item" onClick={() => props.deleteItem(props.item, props.list)}>Delete</button>
    </div>
  );
};

export default ListItem;