import PropTypes from "prop-types";
import React, { Component } from "react";
import { TodoListItems } from "./TodoListItems";

export default class TodoList extends Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
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

  render() {
    //const state = this.context.store.getState();

    return (
      <TodoListItems
        todos={this.props.todos}
        onDelTodoClick={this.handleDelTodoClick.bind(this)}
        onToggleTodoClick={this.handleToggleTodoClick.bind(this)}
      />
    );
  }
}
TodoList.contextTypes = {
  store: PropTypes.object
};
