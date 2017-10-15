import React, { Component } from "react";
import ListAndControlsContainer from "./ListAndControlsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [["Clean Room", 1508068991398], ["Fish", 1508068991398]],
      completedList: [["Shopping", 1508068991398]],
      deletedList: [],
      inputContent: "",
    };
    this.addItem = this.addItem.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
  }

  onInputChange(term) {
    this.setState({
      inputContent: term,
    });
  }

  addItem(e) {
    if (this.state.inputContent) {
      const current = this.state.toDoList;
      current.push([this.state.inputContent, Date.now()]);
      this.setState({
        toDoList: current,
        inputContent: "",
      });
    }
    e.preventDefault();
    console.log(this.state.toDoList);
  }

  deleteItem(key, list) {
    const newDeletedList = this.state.deletedList.concat(key);
    const filtered = this.state[list].filter(a => a !== key);
    if (list === "toDoList") {
      this.setState({
        toDoList: filtered,
        deletedList: newDeletedList,
      });
    }
    if (list === "completedList") {
      this.setState({
        completedList: filtered,
        deletedList: newDeletedList,
      });
    }
  }

  handleComplete(key, list) {
    if (list === "toDoList") {
      const newCompletedList = [...this.state.completedList, key];
      const newToDoList = this.state[list].filter(a => a !== key);
      this.setState({
        toDoList: newToDoList,
        completedList: newCompletedList,
      });
    }
    if (list === "completedList") {
      const newCompletedList = this.state[list].filter(a => a !== key);
      const newToDoList = [...this.state.toDoList, key];
      this.setState({
        toDoList: newToDoList,
        completedList: newCompletedList,
      });
    }
  }

  sortAlphabetically() {
    this.setState({
      toDoList: this.state.toDoList.sort((a,b) => a-b),
      completedList: this.state.toDoList.sort(),
      deletedList: this.state.toDoList.sort(),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ListAndControlsContainer list={this.state.toDoList} addItem={this.addItem} inputContent={this.state.inputContent} onInputChange={this.onInputChange} deleteItem={this.deleteItem} completedList={this.state.completedList} handleComplete={this.handleComplete}/>
        <button className="sort-button" onClick={this.sortAlphabetically}>Sort Alphabetically</button>
      </div>
    );
  }
}

export default App;
