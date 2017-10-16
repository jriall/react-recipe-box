import React, { Component } from "react";
import ListAndControlsContainer from "./ListAndControlsContainer";
import Ping from "../assets/sounds/ping.wav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [["Clean Room", 1508068991398], ["Aish", 1508068991399], ["Zed", 1508068991396], ["Barrel", 15080689913999]],
      completedList: [["Shopping", 1508068991398]],
      deletedList: [],
      inputContent: "",
      showCompleted: false,
      toDoSortedAlphabetically: false,
      toDoSortedChronologically: false,
      completedSortedAlphabetically: false,
      completedSortedChronologically: false,
    };
    this.addItem = this.addItem.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
    this.sortChronologically = this.sortChronologically.bind(this);
    this.toggleCompletedVisibility = this.toggleCompletedVisibility.bind(this);
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
      let sound = document.getElementById('ping');
      sound.currentTime = 0;
      sound.play();
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

  sortAlphabetically(list) {
    if (list === "toDoList") {
      if (!this.state.toDoSortedAlphabetically) {
        const newToDoList = this.state[list].sort((a,b) => a[0]>b[0]);
        this.setState({
          toDoList: newToDoList,
          toDoSortedAlphabetically: true,
        });
      } else {
        const newToDoList = this.state[list].sort((a,b) => a[0]<b[0]);
        this.setState({
          toDoList: newToDoList,
          toDoSortedAlphabetically: false,
        });
      }
    }
    if (list === "completedList") {
      if (!this.state.completedSortedAlphabetically) {
        const newCompletedList = this.state[list].sort((a,b) => a[0]>b[0]);
        this.setState({
          completedList: newCompletedList,
          completedSortedAlphabetically: true,
        });
      } else {
        const newCompletedList = this.state[list].sort((a,b) => a[0]<b[0]);
        this.setState({
          completedList: newCompletedList,
          completedSortedAlphabetically: false,
        });
      }
    }
  }

  sortChronologically(list) {
    if (list === "toDoList") {
      if (!this.state.toDoSortedChronologically) {
        const sorted = this.state[list].sort((a, b) => b[1]-a[1]);
        this.setState({
          toDoList: sorted,
          toDoSortedChronologically: true,
        });
      } else {
        const sorted = this.state[list].sort((a, b) => a[1]-b[1]);
        this.setState({
          toDoList: sorted,
          toDoSortedChronologically: false,
        });
      }
    }
    if (list === "completedList") {
      if (!this.state.completedSortedChronologically) {
        const sorted = this.state[list].sort((a, b) => b[1]-a[1]);
        this.setState({
          completedList: sorted,
          completedSortedChronologically: true,
        });
      } else {
        const sorted = this.state[list].sort((a, b) => a[1]-b[1]);
        this.setState({
          completedList: sorted,
          completedSortedChronologically: false,
        });
      }
    }
  }

  toggleCompletedVisibility() {
    if (this.state.showCompleted) {
      this.setState({
        showCompleted: false,
      });
    } else {
      this.setState({
        showCompleted: true,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <ListAndControlsContainer
          list={this.state.toDoList}
          addItem={this.addItem}
          inputContent={this.state.inputContent}
          onInputChange={this.onInputChange}
          deleteItem={this.deleteItem}
          completedList={this.state.completedList}
          handleComplete={this.handleComplete}
          sortAlphabetically={this.sortAlphabetically}
          sortChronologically={this.sortChronologically}
          toggleCompletedVisibility={this.toggleCompletedVisibility}
          showCompleted={this.state.showCompleted}
        />
        <audio className="audio-tag" id="ping" src={Ping} />
      </div>
    );
  }
}

export default App;
