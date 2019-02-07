import React from "react";
import { connect } from "react-redux";
import { getToggleTodoAction, getDeleteTodoAction } from "../actions/creators";

/**
 * @description A todo item
 * @param {Object} { todo, dispatch }
 * @returns {React.FunctionComponent}
 */
const TodoItem = ({ todo, dispatch }) => {
  return (
    <li className={todo.completed ? "completed" : null}>
      <span>{todo.id}</span>{" "}
      <span onClick={() => dispatch(getToggleTodoAction(todo.id))}>
        {todo.text}
      </span>
      <button
        disabled={todo.completed}
        onClick={() => dispatch(getDeleteTodoAction(todo.id))}
      >
        X
      </button>
    </li>
  );
};

export default connect()(TodoItem);
