import React, { useState } from 'react';
import './App.css'; 

function useIncrement(addAmount) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + addAmount);
  }

  return [count, increase];
}

function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div className="counter">
      <h2>Counter 1</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Add 1</button>
    </div>
  );
}

function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div className="counter">
      <h2>Counter 2</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Add 2</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App;
