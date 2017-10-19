import React from "react";
import ListContainer from "./ListContainer";
import NewItemInput from "../components/NewItemInput";

const ListAndControlsContainer = (props) => {
  return (
    <div className="list-and-controls-container">
      <NewItemInput addItem={props.addItem} inputContent={props.inputContent} onInputChange={props.onInputChange} />
      <ListContainer list={props.list} deleteItem={props.deleteItem} completedList={props.completedList} handleComplete={props.handleComplete} sortAlphabetically={props.sortAlphabetically} sort sortChronologically={props.sortChronologically} toggleCompletedVisibility={props.toggleCompletedVisibility} showCompleted={props.showCompleted}
        editToDo={props.editToDo} colorScheme={props.colorScheme} />
    </div>
  );
};

export default ListAndControlsContainer;
