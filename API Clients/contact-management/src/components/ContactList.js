import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts')
      .then((response) => setContacts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`)
      .then(() => {
        alert('Contact deleted successfully!');
        setContacts(contacts.filter((contact) => contact.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Contacts</h1>
      <Link to="/add">Add Contact</Link>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <button>
              <Link to={`/edit/${contact.id}`}>Edit</Link>
            </button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
