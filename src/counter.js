// Intro to Redux Lesson 6: Store Methods: getState(), dispatch(), and subscribe()

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

const { createStore } = Redux;
// import { createStore } from 'redux';

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
