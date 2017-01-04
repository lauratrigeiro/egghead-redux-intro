// Intro to Redux Lesson 7: Implementing Store from Scratch

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// const { createStore } = Redux;
// import { createStore } from 'redux';

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    // return an unsubscribe method
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  // reducer returns initial value
  dispatch({});

  return { getState, dispatch, subscribe };
};

// Set reducer
const store = createStore(counter);

// get current state of the store: 0
// console.log(store.getState());

// send action to the store
// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());

const render = () => {
  document.body.innerText = store.getState();
};

// register a callback that store will call
// anytime an action is dispatched
store.subscribe(render);
// Show initial state
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})
