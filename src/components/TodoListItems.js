import PropTypes from "prop-types";
import React from "react";
import { TodoItem } from "./TodoItem";
import { Alert } from "./Alert";

export const TodoListItems = ({ todos, onToggleTodoClick, onDelTodoClick }) => {
  const new_todos = todos.filter(t => !t.alerted);

  const new_todo_alert = new_todos.map((todo, index) => (
    <Alert key={index}>{`A new todo item has been created, id=${
      todo.id
    }`}</Alert>
  ));

  const todo_list = todos.map((todo, index) => (
    <TodoItem
      key={index}
      todo={todo}
      onToggle={() => onToggleTodoClick(todo.id)}
      onDelete={() => onDelTodoClick(todo.id)}
    />
  ));

  return (
    <React.Fragment>
      <div className={todo_list.length ? "todo-list shadow" : null}>
        <ul>{todo_list}</ul>
      </div>
      {new_todo_alert}
    </React.Fragment>
  );
};
TodoListItems.contextTypes = {
  store: PropTypes.object
};
