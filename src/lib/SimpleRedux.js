import { Storable } from "./Storable";

/**
 * @description A simplified Redux class
 * @class SimpleRedux
 * @extends {Storable}
 */
class SimpleRedux extends Storable {
  constructor(reducer, storage = false, defaultState = null) {
    super(storage);

    this.listeners = [];
    this.reducer = reducer;

    this.dispatch({ type: undefined });

    this.state = this.loadFromStorage(defaultState);
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);

    this.listeners.forEach(listener => listener(action));
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, reducer) => {
      nextState[reducer] = reducers[reducer](state[reducer], action);

      return nextState;
    }, {});
  };
};

export { SimpleRedux, combineReducers };
