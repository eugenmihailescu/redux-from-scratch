import PropTypes from "prop-types";
import React, { Component } from "react";
import { AddTodo } from "./AddTodo";
import { Filter } from "./Filter";
import VisibleTodoList from "./VisibleTodoList";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <div className="todo-header shadow">
          <AddTodo>ADD_TODO</AddTodo>
          <Filter currentFilter={this.context.store.getState().filter} />
        </div>
        <VisibleTodoList />
      </div>
    );
  }
}
TodoList.contextTypes = {
  store: PropTypes.object
};
