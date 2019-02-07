import { todoReducers } from "../index";
import deepFreeze from "deep-freeze-node";

const getTodo = (id, args = {}) => {
  return {
    id: id,
    text: "todo" + id,
    completed: false,
    alerted: false,
    ...args
  };
};

const getInitialState = () => {
  return { todos: [], filter: "SHOW_ALL" };
};

const addNewTodo = (id, text, state) => {
  return todoReducers(state, { type: "ADD_TODO", id: id, text: text });
};

const toggleTodo = (id, state) => {
  return todoReducers(state, { type: "TOGGLE_TODO", id: id });
};

const setTodoAlert = (id, state) => {
  return todoReducers(state, { type: "ADD_TODO_ALERTED", id: id });
};

const delTodo = (id, state) => {
  return todoReducers(state, { type: "DEL_TODO", id: id });
};

/******************************
*         ADD_TODO x1
/*******************************/
test("add 1x todo", () => {
  const stateBefore = getInitialState();
  deepFreeze(stateBefore);

  const stateAfter = [getTodo(1)];

  // expect one normal alerts
  expect(addNewTodo(1, "todo1", stateBefore).todos).toEqual(stateAfter);
});

/******************************
*         ADD_TODO x2
/*******************************/
test("add 2x todo", () => {
  const stateBefore = getInitialState();
  deepFreeze(stateBefore);

  let states = [addNewTodo(1, "todo1", stateBefore)]; //add new
  states.push(addNewTodo(2, "todo2", states[0])); //add one more

  const stateAfter = [getTodo(1), getTodo(2)];

  // expect two normal alerts
  expect(states[1].todos).toEqual(stateAfter);
});

/******************************
*       ADD_TODO_ALERTED
/*******************************/
test("set 2x todo alert as read", () => {
  const stateBefore = getInitialState();
  deepFreeze(stateBefore);

  let states = [addNewTodo(1, "todo1", stateBefore)]; //add new
  states.push(setTodoAlert(1, states[0])); //acknoledge alert
  states.push(addNewTodo(2, "todo2", states[1])); //add another one

  let stateAfter = [getTodo(1, { alerted: true }), getTodo(2)];

  // expect only the 1st alert should be acknowledged
  expect(states[2].todos).toEqual(stateAfter);

  states.push(setTodoAlert(2, states[2])); //acknoledge that too

  stateAfter = [getTodo(1, { alerted: true }), getTodo(2, { alerted: true })];

  // expect both alerts should be acknowledged
  expect(states[3].todos).toEqual(stateAfter);
});

/******************************
*         TOGGLE_TODO
/*******************************/
test("toggle back and forth 2x todo", () => {
  const stateBefore = getInitialState();
  deepFreeze(stateBefore);

  let states = [addNewTodo(1, "todo1", stateBefore)]; //add new
  states.push(toggleTodo(1, states[0])); //toggle alert to true
  states.push(addNewTodo(2, "todo2", states[1])); //add another one

  let stateAfter = [getTodo(1, { completed: true }), getTodo(2)];

  // expect only the 1st alert should be toggled
  expect(states[2].todos).toEqual(stateAfter);

  states.push(toggleTodo(2, states[2])); //toggle that too

  stateAfter[1].completed = true;

  // expect both alerts should be toggled to true
  expect(states[3].todos).toEqual(stateAfter);

  states.push(toggleTodo(2, states[3])); //toggle back the 2nd to false

  stateAfter[1].completed = false;

  // expect last todo to be uncompleted again
  expect(states[4].todos).toEqual(stateAfter);

  states.push(toggleTodo(1, states[4])); //toggle back the 1st to false

  stateAfter[0].completed = false;

  // expect borth todos to be uncompleted again
  expect(states[5].todos).toEqual(stateAfter);
});

/******************************
*         DEL_TODO
/*******************************/
test("delete 3x todo outside-in", () => {
  const stateBefore = getInitialState();
  deepFreeze(stateBefore);

  let states = [addNewTodo(1, "todo1", stateBefore)]; //add new
  states.push(addNewTodo(2, "todo2", states[0])); //add another one
  states.push(addNewTodo(3, "todo3", states[1])); //add another one

  let stateAfter = [getTodo(1), getTodo(2), getTodo(3)];

  // expect three todo items
  expect(states[2].todos).toEqual(stateAfter);

  states.push(delTodo(2, states[2])); // remove the #2 todo

  stateAfter = stateAfter.filter(todo => todo.id !== 2);

  // expect the 1st and 3rd todo only
  expect(states[3].todos).toEqual(stateAfter);

  states.push(delTodo(1, states[3])); // remove the #1 todo

  stateAfter = stateAfter.filter(todo => todo.id !== 1);

  // expect the 3rd todo only
  expect(states[4].todos).toEqual(stateAfter);

  states.push(delTodo(3, states[4])); // remove the #3 and last todo

  // expect the 3rd todo only
  expect(states[5].todos).toEqual([]);
});
