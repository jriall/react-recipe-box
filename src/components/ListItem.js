import React from "react";

const ListItem = (props) => {
  return (
    <li className="list-item">
      {props.item} <button className="delete-list-item" onClick={() => props.deleteItem(props.item, props.list)}>Delete</button>
    </li>
  );
}

export default ListItem;