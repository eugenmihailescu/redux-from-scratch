import React from "react";
import PropTypes from "prop-types";

let next_id;

export const AddTodo = ({ children }, { store }) => {
  let ALERT_DEFAULT_TIMEOUT = 1500;

  let input, last_id;

  if (undefined === next_id) {
    last_id = store.getState().todos.length;
  } else {
    last_id = next_id;
  }

  const handleAddTodo = input => {
    let result = input.value.length;
    if (!result) {
      input.className = "error";
    } else {
      store.dispatch({
        type: "ADD_TODO",
        text: input.value,
        id: last_id
      });
      store.dispatch({
        type: "NEW_TODO_ALERT",
        id: last_id
      });
      setTimeout(
        () => store.dispatch({ type: "ADD_TODO_ALERTED", id: last_id }),
        ALERT_DEFAULT_TIMEOUT
      );

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
AddTodo.contextTypes = {
  store: PropTypes.object
};
