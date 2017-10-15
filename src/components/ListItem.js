import React from "react";

const ListItem = (props) => {
  console.log(props.list);
  return (
    <div>
    <li className="list-item" onClick={() => props.handleComplete(props.item, props.list)}>
      {props.list === "completedList" ? <strike>{props.item}</strike> : <p>{props.item}</p>}
    </li>
      <button className="delete-list-item" onClick={() => props.deleteItem(props.item, props.list)}>Delete</button>
    </div>
  );
};

export default ListItem;