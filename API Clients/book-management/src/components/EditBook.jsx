import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBook, editBook } from '../services/api';

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    getBook(id)
      .then((response) => {
        const { title, quantity } = response.data;
        setTitle(title);
        setQuantity(quantity);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
      });
  }, [id]);

  const handleSaveBook = () => {
    const updatedBook = {
      title: title,
      quantity: quantity,
    };

    editBook(id, updatedBook)
      .then((response) => {
        alert('Book updated successfully!');
        // Navigate to the Book List page after successful update
        navigate('/');
      })
      .catch((error) => {
        alert('Failed to update book. Please try again.');
        console.error('Error updating book:', error);
      });
  };


  return (
    <div>
      <h1>Edit</h1>
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
      <button onClick={handleSaveBook}>Save</button>
    </div>
  );
};

export default EditBook;
