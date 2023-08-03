import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`)
      .then((response) => {
        alert('Delete successful');
        // Refresh the book list after deletion
        setBooks(books.filter((book) => book.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  return (
    <div>
      <h1>Library</h1>
      <button>Add a new Book</button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
