import React from 'react';
import ListItem from '../components/ListItem';

const CompletedListContainer = (props) => {
  const completedListItems = props.completedList.map((item, index) => <ListItem item={item} key={index} deleteItem={props.deleteItem} list="completedList" handleComplete={props.handleComplete} />);

  return (
    <div>
      <h2>Completed To Do Items</h2>
      <ul className="list-container">{completedListItems}</ul>
      <button className="sort-button" onClick={() => props.sortAlphabetically("completedList")}>Sort Completed Alphabetically</button>
      <button className="sort-button" onClick={() => props.sortChronologically("completedList")}>Sort Completed Chronologically</button>
    </div>
  )
}

export default CompletedListContainer;