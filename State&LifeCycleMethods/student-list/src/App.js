import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [studentList, setStudentList] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [isValid, setIsValid] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSelect = (studentSelected, index) => {
    setForm({ ...studentSelected });
    setIndexSelected(index);
  };

  const checkInvalidForm = useCallback(() => {
    const { name, phone, email } = form;
    const value = name && phone && email;
    setIsValid(value);
  }, [form]);

  useEffect(() => {
    checkInvalidForm();
  }, [checkInvalidForm]);

  const handleSubmit = () => {
    if (isValid) {
      if (indexSelected > -1) {
        const newList = [...studentList];
        newList.splice(indexSelected, 1, form);
        setStudentList(newList);
      } else {
        setStudentList((prevList) => [...prevList, form]);
      }
      setForm({ name: '', phone: '', email: '' });
      setIsValid(false);
      setIndexSelected(-1);
    }
  };

  const handleDelete = (index) => {
    const newList = [...studentList];
    newList.splice(index, 1);
    setStudentList(newList);
  };

  return (
    <div className="App">
      <div>
        <h1>Student List</h1>
        <div className="container">
          <label>Name: </label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="container">
          <label>Phone: </label>
          <input type="number" name="phone" value={form.phone} onChange={handleChange} />
        </div>
        <div className="container">
          <label>Email: </label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button className="edit" onClick={() => handleSelect(student, index)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
