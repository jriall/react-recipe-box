import React from 'react';
import ListItem from '../components/ListItem';

const ListContainer = (props) => {
  const listItems = props.list.map((item, index) => <ListItem item={item} key={index} deleteItem={props.deleteItem} list="toDoList" handleComplete={props.handleComplete} />);
  const completedListItems = props.completedList.map((item, index) => <ListItem item={item} key={index} deleteItem={props.deleteItem} list="completedList" handleComplete={props.handleComplete} />);
  return (
    <div>
      <h2>To Do Items</h2>
      <ul className="list-container">{listItems}</ul>
      <button className="sort-button" onClick={() => props.sortAlphabetically("toDoList")}>Sort To Dos Alphabetically</button>
      <button className="sort-button" onClick={() => props.sortChronologically("toDoList")}>Sort To Dos Chronologically</button>
      <button className="visibility-button" onClick={() => props.toggleCompletedVisibility()}>{props.showCompleted ? `Hide ${props.completedList.length} Completed To Dos` : `Show ${props.completedList.length} Completed To Dos`}</button>
      <h2>Completed To Do Items</h2>
      <ul className="list-container">{completedListItems}</ul>
      <button className="sort-button" onClick={() => props.sortAlphabetically("completedList")}>Sort Completed Alphabetically</button>
      <button className="sort-button" onClick={() => props.sortChronologically("completedList")}>Sort Completed Chronologically</button>
    </div>
  );
};

export default ListContainer;
