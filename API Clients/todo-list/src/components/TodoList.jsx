import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodoList.css';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newTodo = {
        title: task,
        completed: false,
      };
      const response = await axios.post(API_URL, newTodo);
      alert(`Todo added successfully! Status: ${response.status}`);
      fetchTodos(); 
      setTask('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter your todo task..."
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
