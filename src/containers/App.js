import React, { Component } from "react";
import ListAndControlsContainer from "./ListAndControlsContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Clean Room", "Laundry", "Homework", "Fishing"],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ListAndControlsContainer list={this.state.list} />
      </div>
    );
  }
}

export default App;
