const getAddTodoAction = (id, text) => {
  return { type: "ADD_TODO", text: text, id: id };
};

const getDeleteTodoAction = id => {
  return {
    type: "DEL_TODO",
    id: id
  };
};
const getNewTodoAlertAction = id => {
  return { type: "NEW_TODO_ALERT", id: id };
};
const getTodoAlertedAction = id => {
  return { type: "ADD_TODO_ALERTED", id: id };
};

const getSetFilterAction = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

const getToggleTodoAction = id => {
  return { type: "TOGGLE_TODO", id: id };
};

export {
  getAddTodoAction,
  getDeleteTodoAction,
  getNewTodoAlertAction,
  getTodoAlertedAction,
  getSetFilterAction,
  getToggleTodoAction
};
