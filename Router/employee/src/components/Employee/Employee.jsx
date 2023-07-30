import React from 'react';
import { Link } from 'react-router-dom';

const employees = [
  {
    id: 1,
    name: 'Luu Huyen',
    age: 22,
  },
  {
    id: 2,
    name: 'Kieu Dat',
    age: 23,
  },
  {
    id: 3,
    name: 'Nhat Giang',
    age: 23,
  },
  {
    id: 4,
    name: 'Hai Duc',
    age: 23,
  }
];

const Employee = () => {
  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <Link to={`/employee/${employee.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
