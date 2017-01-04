// Intro to Redux Lesson 8: React Counter Example

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

// React DOM Component (no business logic)
const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const { createStore } = Redux;

// Set reducer
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
         type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
         type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  );
};

// register a callback that store will call
// anytime an action is dispatched
store.subscribe(render);
// Show initial state
render();
