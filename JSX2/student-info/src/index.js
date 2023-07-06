import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const students = [
  {
    company: 'Masflex',
    contact: 'Luu Thi Thu Huyen',
    country: 'Vietnam'
  },
  {
    company: 'Masflex',
    contact: 'Le Mai Linh',
    country: 'Vietnam'
  },
  {
    company: 'Masflex',
    contact: 'Dung Nguyen',
    country: 'Vietnam'
  },
  {
    company: 'Masflex',
    contact: 'Pham Nhat Giang',
    country: 'Vietnam'
  },
  {
    company: 'Masflex',
    contact: 'Kieu Thanh Dat',
    country: 'Vietnam'
  },
  {
    company: 'Masflex',
    contact: 'Nguyen Hai Duc',
    country: 'Vietnam'
  },
  {
    company: 'Masflex',
    contact: 'Dang Nhat Minh',
    country: 'Vietnam'
  }
];

const App = () => {
  return (
    <div>
      <h1>Students Information</h1>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

