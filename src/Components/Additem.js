import React, { Component } from "react";

export default class Additem extends Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.state = { error: null };
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.add}>
          <input type="text" name="taskName" />
          <input type="submit" value="addItem" />
        </form>
      </div>
    );
  }
  add(e) {
    e.preventDefault();
    const text = e.target.elements.taskName.value;
    const error = this.props.addItem(text);
    this.setState({ error: error });
  }
}
