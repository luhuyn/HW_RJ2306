import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = { name, email, phone };

    axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts', formData)
      .then(() => {
        alert('Contact added successfully!');
        setName('');
        setEmail('');
        setPhone('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
      <Link to="/">Back to Contacts</Link>
    </div>
  );
};

export default ContactForm;
