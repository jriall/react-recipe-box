import React from 'react';
import ListItem from '../components/ListItem';

const ListContainer = (props) => {
  const listItems = props.list.map((item, index) => <ListItem item={item} key={index} deleteItem={props.deleteItem} list="toDoList" handleComplete={props.handleComplete} />);
  const completedListItems = props.completedList.map((item, index) => <ListItem item={item} key={index} deleteItem={props.deleteItem} list="completedList" handleComplete={props.handleComplete} />);
  return (
    <div>
      <h2>To Do Items</h2>
      <ul className="list-container">{listItems}</ul>
      <h2>Completed To Do Items</h2>
      <ul className="list-container">{completedListItems}</ul>
    </div>
  );
};

export default ListContainer;
