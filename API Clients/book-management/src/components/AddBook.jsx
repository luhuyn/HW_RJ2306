import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/api';

const AddBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddBook = () => {
    const newBook = {
      title: title,
      quantity: quantity,
    };

    addBook(newBook)
      .then((response) => {
        alert('Book added successfully!');
        // Navigate to the Book List page after successful addition
        navigate('/');
      })
      .catch((error) => {
        alert('Failed to add book. Please try again.');
        console.error('Error adding book:', error);
      });
  };

  return (
    <div>
      <h1>Add a new Book</h1>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAddBook}>Add</button>
    </div>
  );
};

export default AddBook;
