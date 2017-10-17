import React from "react";
import TrashIcon from '../assets/images/trash-icon.png';

const ListItem = props => {
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
      <div className="list-item-container">
        <li className="list-item">
          {props.list === "completedList" ? <h3 onClick={() => props.handleComplete(props.item, props.list)}><strike>{props.item[0]}</strike></h3> : <h3 onClick={() => props.handleComplete(props.item, props.list)}>{props.item[0]}</h3>}
          <button className="delete-list-item" onClick={() => props.deleteItem(props.item, props.list)}><img className="trash-icon" src={TrashIcon} alt="trash"/></button>
          <p>Created on: {`${date}/${month}/${year} at ${hours}:${minutes}`}</p>
        </li>
      </div>
    );
};

export default ListItem;