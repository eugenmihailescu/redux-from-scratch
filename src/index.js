import React from "react";
import ReactDOM from "react-dom";
import Provider from "./lib/Provider";
import TodoList from "./components/TodoList";
import { SimpleRedux as createStore } from "./lib/SimpleRedux";
import { todoReducers as all_reducer } from "./reducers/todoReducer";

let store = new createStore(all_reducer, null, {
  todos: [],
  filter: "SHOW_ALL"
});

let subscribers = [];

window.addEventListener("unload", () => {
  store.saveToStorage(); // does not supports browser env, works only within NodeJS env

  subscribers.forEach(unsubscribe => unsubscribe());
});

const logging = action => {
  console.log(action, store.getState());
};

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoList />
    </Provider>,
    document.getElementById("root")
  );
};

subscribers.push(store.subscribe(logging));
subscribers.push(store.subscribe(render));

render();

// Next stop: https://overreacted.io/react-as-a-ui-runtime/
