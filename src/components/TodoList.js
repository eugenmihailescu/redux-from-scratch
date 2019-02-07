import React from "react";
import Alert from "./Alert";
import TodoItem from "./TodoItem";

/**
 * @description The list of todos
 * @param {Object} { todos }
 * @returns {React.FunctionComponent}
 */
const TodoList = ({ todos }) => {
  const todo_list = todos.map((todo, index) => (
    <TodoItem key={index} todo={todo} />
  ));

  const new_todo_alert = todos
    .filter(t => !t.alerted)
    .map((todo, index) => (
      <Alert key={index}>{`A new todo item has been created, id=${
        todo.id
      }`}</Alert>
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

export default TodoList;
