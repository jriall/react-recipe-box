import React from "react";
import ListContainer from "./ListContainer";
import NewItemInput from "../components/NewItemInput";

const ListAndControlsContainer = (props) => {
  return (
    <div className="list-and-controls-container">
      <NewItemInput />
      <ListContainer list={props.list} />
    </div>
  );
};

export default ListAndControlsContainer;
