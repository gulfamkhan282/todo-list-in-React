import React, { Component } from "react";
import Item from "./Item";
export default class Items extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.tasks.map((task, k) => {
            return (
              <Item
                taskName={task}
                key={k}
                removeOneTask={this.props.removeOneTask}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}
