import React, { Component } from "react";
import Input from "./input";
import ListTodo from "./listTodo";
import "bootstrap/dist/css/bootstrap.min.css";

class Todos extends Component {
  state = {
    todo: [],
  };

  handleChargeData = (data) => {
    const todo = [...this.state.todo, data];
    this.setState({ todo });
  };
  handleDeleted = (id) => {
    let todos = this.state.todo.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todo: todos });
  };
  render() {
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 ">
          <p className="justify-content-center">TODO List</p>
          <Input data={this.handleChargeData} />
          <ListTodo list={this.state.todo} IdTodo={this.handleDeleted} />
        </div>
      </div>
    );
  }
}

export default Todos;
