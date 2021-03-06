import React from 'react';
import ListItem from '../components/ListItem';
import { CSSTransitionGroup } from 'react-transition-group';

const CompletedListContainer = (props) => {
  const completedListItems = props.completedList.map((item) => <ListItem item={item} key={item[1]} deleteItem={props.deleteItem} list="completedList" handleComplete={props.handleComplete} colorScheme={props.colorScheme} />);

const sortButtons = (
  <div>
    <button
      className="sort-button" onClick={() => props.sortAlphabetically("completedList")}>Sort Alphabetically
    </button>
    <button
      className="sort-button" onClick={() => props.sortChronologically("completedList")}>Sort Chronologically
    </button>
  </div>
);

  return (
    <div>
      <h2>Completed To Do Items</h2>
      <ul className="list-container">
        <CSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionAppear={true}
                transitionAppearTimeout={500}
              >
      {completedListItems}
         </CSSTransitionGroup>
      </ul>
      {props.completedList.length > 0 ? sortButtons : <div></div>}

    </div>
  )
}

export default CompletedListContainer;