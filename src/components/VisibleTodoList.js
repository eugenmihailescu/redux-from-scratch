import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";

/**
 * @description The filtered todos
 * @param {Object} { todos, filter }
 * @returns {React.FunctionComponent}
 */
const VisibleTodoList = ({ todos, filter }) => {
  const getVisibleTodos = (todos, filter) => {
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
  };

  return <TodoList todos={getVisibleTodos(todos, filter)} />;
};

/***************************************************
 * Connect the VisibleTodoList component to the Redux store
 **************************************************/

/**
 * @description Map the store's state to the VisibleTodoList props
 * @param {Object} state The store's current state
 * @returns {Object}
 */
const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter
  };
};

// export as Rect.Component the Provider wrapped around the VisibleTodoList component
export default connect(
  mapStateToProps,
  null
)(VisibleTodoList);
