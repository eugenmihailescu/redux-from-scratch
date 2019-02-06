import React from "react";
import PropTypes from "prop-types";

let next_id;

export const AddTodo = ({ children }, { store }) => {
  let input;

  if (undefined === next_id) {
    next_id = store.getState().todos.length;
  }

  const handleAddTodo = input => {
    let result = input.value.length;
    if (!result) {
      input.className = "error";
    } else {
      store.dispatch({
        type: "ADD_TODO",
        text: input.value,
        id: next_id
      });
      store.dispatch({
        type: "NEW_TODO_ALERT",
        id: next_id
      });

      input.className = null;
      input.value = "";
      next_id += 1;
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
