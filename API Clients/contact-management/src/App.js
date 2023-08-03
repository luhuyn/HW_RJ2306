import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import ContactEdit from './components/ContactEdit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/edit/:id" element={<ContactEdit />} />
      </Routes>
    </Router>
  );
};

export default App;

