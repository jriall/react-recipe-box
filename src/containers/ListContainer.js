import React from 'react';
import ListItem from '../components/ListItem';
import CompletedListContainer from './CompletedListContainer';

const ListContainer = (props) => {
  const listItems = props.list.map((item, index) => <ListItem item={item} key={index} deleteItem={props.deleteItem} list="toDoList" handleComplete={props.handleComplete} />)
  let completedList = "";
  if (props.showCompleted) {
    completedList = <CompletedListContainer completedList={props.completedList} handleComplete={props.handleComplete} sortAlphabetically={props.sortAlphabetically} sort sortChronologically={props.sortChronologically} showCompleted={props.showCompleted} />
  }
  return (
    <div>
      <h2>To Do Items</h2>
      <ul className="list-container">{listItems}</ul>
      <button className="sort-button" onClick={() => props.sortAlphabetically("toDoList")}>Sort To Dos Alphabetically</button>
      <button className="sort-button" onClick={() => props.sortChronologically("toDoList")}>Sort To Dos Chronologically</button>
      <button className="visibility-button" onClick={() => props.toggleCompletedVisibility()}>{props.showCompleted ? `Hide ${props.completedList.length} Completed To Dos` : `Show ${props.completedList.length} Completed To Dos`}</button>
      {completedList}
    </div>
  );
};

export default ListContainer;
