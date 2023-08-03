import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ContactEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`)
      .then((response) => {
        const { name, email, phone } = response.data;
        setName(name);
        setEmail(email);
        setPhone(phone);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSave = (event) => {
    event.preventDefault();

    const formData = { name, email, phone };

    axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`, formData)
      .then(() => {
        alert('Contact updated successfully!');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSave}>
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
        <button type="submit">Save</button>
      </form>
      <Link to="/">Back to Contacts</Link>
    </div>
  );
};

export default ContactEdit;
