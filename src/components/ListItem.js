import React from "react";

const ListItem = (props) => {
  const d = new Date(props.item[1]);
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let hours = d.getHours()
  let minutes = d.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <div>
    <li className="list-item" onClick={() => props.handleComplete(props.item, props.list)}>
      {props.list === "completedList" ? <h3><strike>{props.item[0]}</strike></h3> : <h3>{props.item[0]}</h3>}
      <p>Created on: {`${date}/${month}/${year} at ${hours}:${minutes}`}</p>
    </li>
      <button className="delete-list-item" onClick={() => props.deleteItem(props.item, props.list)}>Delete</button>
    </div>
  );
};

export default ListItem;