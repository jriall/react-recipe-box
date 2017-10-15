import React from "react";

const ListItem = (props) => {
  return (
    <div>
    <li className="list-item" onClick={() => props.handleComplete(props.item, props.list)}>
      {props.list === "completedList" ? <h3><strike>{props.item[0]}</strike></h3> : <h3>{props.item[0]}</h3>}
      <p>Created on: {props.item[1]}</p>
    </li>
      <button className="delete-list-item" onClick={() => props.deleteItem(props.item, props.list)}>Delete</button>
    </div>
  );
};

export default ListItem;