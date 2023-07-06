import React from 'react';
import StudentInfoComponent from './components/studentInfo';
import './index.css';

const students = [
  { id: 1, name: 'Luu Huyen', age: 22, address: 'Hanoi' },
  { id: 2, name: 'Mai Linh', age: 23, address: 'Hanoi' },
  { id: 3, name: 'Nguyen Dung', age: 23, address: 'Hanoi' },
  { id: 4, name: 'Nhat Giang', age: 23, address: 'Hanoi' },
  { id: 5, name: 'Kieu Dat', age: 23, address: 'Hanoi' },
  { id: 6, name: 'Hai Duc', age: 23, address: 'Hanoi' },
  { id: 7, name: 'Nhat Minh', age: 23, address: 'Hanoi' }
];

const App = () => {
  return (
    <div>
      <h1>Student Information</h1>
      <StudentInfoComponent students={students} />
    </div>
  );
};

export default App;
