import React, { Component } from "react";

export default class Pick extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.pick}>Pick a Task</button>
      </div>
    );
  }
}
