import React, { Component } from "react";
import ListAndControlsContainer from "./ListAndControlsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Clean Room", "Laundry", "Homework", "Fishing"],
      inputContent: "",
    };
    this.addItem = this.addItem.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this.state.inputContent) {
      const current = this.state.list;
      current.push(this.state.inputContent);
      this.setState({
        list: current,
        inputContent: "",
      });
    }
    e.preventDefault();
  }

  onInputChange(term) {
    this.setState({
      inputContent: term,
    });
  }

  deleteItem(key) {
    const filtered = this.state.list.filter(a => a !== key);
    this.setState({
      list: filtered,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ListAndControlsContainer list={this.state.list} addItem={this.addItem} inputContent={this.state.inputContent} onInputChange={this.onInputChange} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
