import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import './App.css';

const initialBooks = [
  { title: 'Make My Day', quantity: 10 },
  { title: 'Doraemon', quantity: 5 },
];

const App = () => {
  const [books, setBooks] = useState(initialBooks);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
    setIndexSelected(-1);
  };

  const handleSubmit = (values, actions) => {
    const newBooks = [...books];
    if (indexSelected > -1) {
      newBooks.splice(indexSelected, 1, values);
    } else {
      newBooks.push(values);
    }
    setBooks(newBooks);
    setForm({});
    setIndexSelected(-1);
    actions.resetForm(); // Reset the form after successful submission
  };

  return (
    <div>
      <h1>Library</h1>
      <Formik
        initialValues={indexSelected !== -1 ? form : { title: '', quantity: '' }}
        enableReinitialize={true}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          if (!values.quantity) {
            errors.quantity = 'Required';
          } else if (isNaN(values.quantity)) {
            errors.quantity = 'Must be a number';
          }
          return errors;
        }}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {({ values, handleChange }) => (
          <Form>
            <div>
              <label>Title:</label>
              <Field type="text" name="title" value={values.title} onChange={handleChange} />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div>
              <label>Quantity:</label>
              <Field type="text" name="quantity" value={values.quantity} onChange={handleChange} />
              <ErrorMessage name="quantity" component="div" className="error" />
            </div>
            <div>
              {indexSelected !== -1 ? (
                <>
                  <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff' }}>Save</button>
                  <button type="button" onClick={() => setIndexSelected(-1)}>Cancel</button>
                </>
              ) : (
                <button type="submit">Add</button>
              )}
            </div>
          </Form>
        )}
      </Formik>

      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th className="title-column">Title</th>
            <th className="quantity-column">Quantity</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td className="title-column">{book.title}</td>
              <td className="quantity-column">{book.quantity}</td>
              <td className="actions-column">
                <button type="button" style={{ backgroundColor: '#007bff', color: '#fff' }} onClick={() => handleSelect(book, index)}>Edit</button>
                <button type="button" style={{ backgroundColor: '#dc3545', color: '#fff' }} onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
