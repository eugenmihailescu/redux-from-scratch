import PropTypes from "prop-types";
import React, { Component } from "react";
import { Alert } from "./Alert";
import { TodoItem } from "./TodoItem";

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

    const todo_list = this.props.todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        onToggle={() => this.handleToggleTodoClick(todo.id)}
        onDelete={() => this.handleDelTodoClick(todo.id)}
      />
    ));

    const new_todos = this.props.todos.filter(t => !t.alerted);
    const new_todo_alert = new_todos.map((todo, index) => (
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
  }
}
TodoList.contextTypes = {
  store: PropTypes.object
};
