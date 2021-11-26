import React, { Component } from "react";
import Additem from "./Additem";
import Pick from "./Pick";
import Items from "./Items";
import RemoveAll from "./RemoveAll";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Allogan", "Piyaz", "paper", "pamper", "Tamator"],
      error: null,
    };
    this.removeAll = this.removeAll.bind(this);
    this.pick = this.pick.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeOneTask = this.removeOneTask.bind(this);
  }

  render() {
    return (
      <div>
        <h1>React Todo App</h1>
        <Additem addItem={this.addItem} error={this.state.error} />
        <Pick pick={this.pick} />
        <Items tasks={this.state.tasks} removeOneTask={this.removeOneTask} />
        <RemoveAll removeAll={this.removeAll} />
      </div>
    );
  }
  componentDidMount() {
    // const s = JSON.parse(localStorage.getItem("tasks"));
    if (!JSON.parse(localStorage.getItem("tasks")).tasks) {
      this.setState({ tasks: [] });
    } else {
      const t = JSON.parse(localStorage.getItem("tasks"));
      this.setState({ tasks: t.tasks });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("tasks", JSON.stringify(this.state));
  }
  removeOneTask(task) {
    const reaminingTask = this.state.tasks.filter((t) => {
      return t !== task;
    });
    this.setState({ tasks: reaminingTask });
  }
  addItem() {}
  removeAll() {
    this.setState({ tasks: [] });
  }
  pick() {
    const lenght = this.state.tasks.length;
    const r = Math.floor(Math.random() * lenght);
    alert(this.state.tasks[r]);
  }
  addItem(newTask) {
    if (newTask === "") {
      return "Empty task names are not allowed.";
    } else if (newTask.length < 4) {
      return "Minimum length of a Task name is 3 caharcter. ";
    } else if (this.state.tasks.indexOf(newTask) >= 0) {
      return "Task already in th list.Guzara kawa.";
    }

    this.setState({ tasks: this.state.tasks.concat(newTask) });
  }
  items() {}
}
