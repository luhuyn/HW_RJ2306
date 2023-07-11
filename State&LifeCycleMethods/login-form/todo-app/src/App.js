import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAddItem = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <ul className="todo-list disabled">
        {list.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
