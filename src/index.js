import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import TodoApp from "./components/TodoApp";
import { todoReducers as all_reducer } from "./reducers/todoReducer";

// debuggin console
const logger = ({ getState, dispatch }) => {
  return next => action => {
    console.log("will dispatch", action);

    const result = next(action);

    console.log("state after dispatch", getState());

    return result;
  };
};

const store = createStore(all_reducer, undefined, applyMiddleware(logger));

/**
 * @description The ReactDOM main function
 */
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById("root")
  );
};

render();

// Next stop: https://overreacted.io/react-as-a-ui-runtime/
