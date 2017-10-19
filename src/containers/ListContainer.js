import React from 'react';
import ListItem from '../components/ListItem';
import CompletedListContainer from './CompletedListContainer';
import { CSSTransitionGroup } from 'react-transition-group';

const ListContainer = (props) => {
  const listItems = props.list.map((item, index) => <ListItem item={item} key={item[1]} deleteItem={props.deleteItem} list="toDoList" handleComplete={props.handleComplete} editToDo={props.editToDo} index={index} colorScheme={props.colorScheme} />)
  let completedList = "";
  if (props.showCompleted) {
    completedList = <CompletedListContainer completedList={props.completedList} handleComplete={props.handleComplete} sortAlphabetically={props.sortAlphabetically} sort sortChronologically={props.sortChronologically} showCompleted={props.showCompleted} deleteItem={props.deleteItem} colorScheme={props.colorScheme} />
  }
  let completedContainer = (
      <div>
          {completedList}
      <button className="visibility-button" onClick={() => props.toggleCompletedVisibility()}>{props.showCompleted ? `Hide ${props.completedList.length} Completed To Dos` : `Show ${props.completedList.length} Completed To Dos`}
      </button>
      </div>
    );
  let toDoContainer = (
      <div>
          <ul className="list-container">
              <CSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionAppear={true}
                transitionAppearTimeout={500}
              >
              {listItems}
              </CSSTransitionGroup>
          </ul>
        <button className="sort-button" onClick={() => props.sortAlphabetically("toDoList")}>Sort To Dos Alphabetically</button>
        <button className="sort-button" onClick={() => props.sortChronologically("toDoList")}>Sort To Dos Chronologically</button>
      </div>
    )

  if (props.list.length === 0) {
    console.log("fish");
  }

  return (
    <div>
      {toDoContainer}
      {completedContainer}
    </div>
  );
};

export default ListContainer;
