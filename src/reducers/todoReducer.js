import { combineReducers } from "../lib/SimpleRedux";

const todoAction = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
        alerted: false
      };
    case "TOGGLE_TODO":
      if (state.id === action.id) {
        return { ...state, completed: !state.completed };
      }
      return state;
    case "ADD_TODO_ALERTED":
      if (state.id === action.id) {
        return { ...state, alerted: true };
      }
      return state;
    default:
      return state;
  }
};

const todoActions = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todoAction(undefined, action)];
    case "DEL_TODO":
      return state.filter(t => {
        return t.id !== action.id;
      });
    case "TOGGLE_TODO":
    case "ADD_TODO_ALERTED":
      return state.map(t => todoAction(t, action));
    default:
      return state;
  }
};

const todoFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export const todoReducers = combineReducers({
  todos: todoActions,
  filter: todoFilter
});
