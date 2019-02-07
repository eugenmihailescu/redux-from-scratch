import PropTypes from "prop-types";
import React, { Component } from "react";
import TodoList from "./TodoList";

export default class VisibleTodoList extends Component {
  getVisibleTodos(todos, filter) {
    switch (filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    return <TodoList todos={this.getVisibleTodos(state.todos, state.filter)} />;
  }
}
VisibleTodoList.contextTypes = {
  store: PropTypes.object
};
