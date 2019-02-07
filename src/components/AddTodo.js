import React from "react";
import { connect } from "react-redux";
import {
  getAddTodoAction,
  getNewTodoAlertAction,
  getTodoAlertedAction
} from "../actions/creators";

const ALERT_DEFAULT_TIMEOUT = 1500;
let next_id;

/**
 * @description The AddTodo input container
 * @param {Object} { todos, children, addTodo }
 * @returns {React.FunctionComponent}
 */
const AddTodo = ({ todos, children, addTodo }) => {
  let input, last_id;

  if (undefined === next_id) {
    last_id = todos.length;
  } else {
    last_id = next_id;
  }

  const handleAddTodo = input => {
    let result = input.value.length;
    if (!result) {
      input.className = "error";
    } else {
      addTodo(input.value, last_id);

      input.className = null;
      input.value = "";
      next_id = last_id + 1;
    }

    input.focus();
  };

  return (
    <div>
      <input
        onKeyUp={e => {
          if (e.keyCode === 13) {
            handleAddTodo(e.target);
          }
        }}
        ref={node => {
          input = node;
        }}
      />
      <button onClick={() => handleAddTodo(input)}>{children}</button>
    </div>
  );
};

/***************************************************
 * Connect the AddTodo component to the Redux store
 **************************************************/

/**
 * @description Map the store's state to the AddTodo props
 * @param {Object} state
 * @returns {Object}
 */
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

/**
 * @description Map the store's dispatcher to the AddTodo props
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (text, id) => {
      dispatch(getAddTodoAction(id, text));
      dispatch(getNewTodoAlertAction(id));
      setTimeout(
        () => dispatch(getTodoAlertedAction(id)),
        ALERT_DEFAULT_TIMEOUT
      );
    }
  };
};

// export as Rect.Component the Provider wrapped around the AddTodo component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
