import axios from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/codegym-vn/mock-api-books';

export const getBooks = () => axios.get(`${BASE_URL}/books`);

export const getBook = (id) => axios.get(`${BASE_URL}/books/${id}`);

export const addBook = (newBook) => axios.post(`${BASE_URL}/books`, newBook);

export const editBook = (id, updatedBook) =>
  axios.put(`${BASE_URL}/books/${id}`, updatedBook);

export const deleteBook = (id) => axios.delete(`${BASE_URL}/books/${id}`);
