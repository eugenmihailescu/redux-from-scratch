import PropTypes from "prop-types";
import React from "react";

export const TodoItem = ({ todo, onToggle, onDelete }, { store }) => {
  return (
    <li className={todo.completed ? "completed" : null}>
      <span>{todo.id}</span> <span onClick={onToggle}>{todo.text}</span>
      <button disabled={todo.completed} onClick={onDelete}>
        X
      </button>
    </li>
  );
};
TodoItem.contextTypes = {
  store: PropTypes.object
};
