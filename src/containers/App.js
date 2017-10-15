import React, { Component } from "react";
import ListAndControlsContainer from "./ListAndControlsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ["Clean Room", "Laundry", "Homework"],
      completedList: ["Shopping", "Cooking", "Take out rubbish"],
      deletedList: [],
      inputContent: "",
    };
    this.addItem = this.addItem.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  onInputChange(term) {
    this.setState({
      inputContent: term,
    });
  }

  addItem(e) {
    if (this.state.inputContent) {
      const current = this.state.toDoList;
      current.push(this.state.inputContent);
      this.setState({
        toDoList: current,
        inputContent: "",
      });
    }
    e.preventDefault();
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

  render() {
    console.log(this.state.toDoList);
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ListAndControlsContainer list={this.state.toDoList} addItem={this.addItem} inputContent={this.state.inputContent} onInputChange={this.onInputChange} deleteItem={this.deleteItem} completedList={this.state.completedList} />
      </div>
    );
  }
}

export default App;
