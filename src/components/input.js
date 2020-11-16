import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Input extends Component {
  state = {
    id: 0,
    todo: "",
  };

  handleChange = (e) => {
    this.setState({ id: this.state.id + 1, todo: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.data(this.state);
    this.setState({ todo: "" });
  };
  render() {
    return (
      <div className=" ">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="todo"
              value={this.state.todo}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
