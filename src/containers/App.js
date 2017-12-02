import React, { Component } from "react";
import ListAndControlsContainer from "./ListAndControlsContainer";
import ColorSelector from '../components/ColorSelector';
import Ping from "../assets/sounds/ping.wav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [["Take out rubbish", 1508068991397], ["Grocery shopping", 1508068991398], ["Walk the dog", 1508068991396], ["Go for run", 1508068991310]],
      completedList: [["Wash dishes", 1508068991400], ["Pay bills", 1508068991401]],
      deletedList: [],
      toDoInputContent: "",
      showCompleted: false,
      toDoSortedAlphabetically: false,
      toDoSortedChronologically: false,
      completedSortedAlphabetically: false,
      completedSortedChronologically: false,
      colorScheme: "blue",
    };
    this.addItem = this.addItem.bind(this);
    this.onToDoInputChange = this.onToDoInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
    this.sortChronologically = this.sortChronologically.bind(this);
    this.toggleCompletedVisibility = this.toggleCompletedVisibility.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  onToDoInputChange(term) {
    this.setState({
      toDoInputContent: term,
    });
  }

  addItem(e) {
    if (this.state.toDoInputContent) {
      const current = this.state.toDoList;
      current.push([this.state.toDoInputContent, Date.now()]);
      this.setState({
        toDoList: current,
        toDoInputContent: "",
      });
    }
    e.preventDefault();
  }

  deleteItem(key, list) {
    const newDeletedList = this.state.deletedList.concat(key);
    let filtered = this.state[list].slice();
    filtered.splice(filtered.indexOf(key), 1);
    //const filtered = this.state[list].filter(a => a !== key);
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
      const newCompletedList = this.state.completedList.concat([key]);
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
      const newToDoList = this.state.toDoList.concat([key]);
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

  changeColor(color) {
    const colorScheme = color.toLowerCase();
    this.setState({ colorScheme });
  }

  render() {
    return (
      <div className={`App ${this.state.colorScheme}-app`}>
        <h1>React To Do List</h1>
        <ColorSelector changeColor={this.changeColor} currentColor={this.state.currentColor} colorScheme={this.state.colorScheme}/>
        <ListAndControlsContainer
          list={this.state.toDoList}
          addItem={this.addItem}
          inputContent={this.state.toDoInputContent}
          onInputChange={this.onToDoInputChange}
          deleteItem={this.deleteItem}
          completedList={this.state.completedList}
          handleComplete={this.handleComplete}
          sortAlphabetically={this.sortAlphabetically}
          sortChronologically={this.sortChronologically}
          toggleCompletedVisibility={this.toggleCompletedVisibility}
          showCompleted={this.state.showCompleted}
          colorScheme={this.state.colorScheme}
        />
        <audio className="audio-tag" id="ping" src={Ping} />
      </div>
    );
  }
}

export default App;
