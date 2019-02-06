import PropTypes from "prop-types";
import React, { Component } from "react";
import { TodoListItems } from "./TodoListItems";

export default class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

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

  handleDelTodoClick(id) {
    this.context.store.dispatch({
      type: "DEL_TODO",
      id: id
    });
  }

  handleToggleTodoClick(id) {
    this.context.store.dispatch({ type: "TOGGLE_TODO", id: id });
  }

  handleHideAlert(id) {
    this.context.store.dispatch({ type: "ADD_TODO_ALERTED", id: id });
  }

  render() {
    const state = this.context.store.getState();

    return (
      <TodoListItems
        todos={this.getVisibleTodos(state.todos, state.filter)}
        onDelTodoClick={this.handleDelTodoClick.bind(this)}
        onToggleTodoClick={this.handleToggleTodoClick.bind(this)}
        onHideAlert={this.handleHideAlert.bind(this)}
      />
    );
  }
}
VisibleTodoList.contextTypes = {
  store: PropTypes.object
};
