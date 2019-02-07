import React from "react";
import AddTodo from "./AddTodo";
import Filter from "./Filter";
import VisibleTodoList from "./VisibleTodoList";

/**
 * @description The Todo component
 * @returns {React.FunctionComponent}
 */
const TodoApp = () => {
  return (
    <div>
      <div className="todo-header shadow">
        <AddTodo>New todo</AddTodo>
        <Filter />
      </div>
      <VisibleTodoList />
    </div>
  );
};

export default TodoApp;
