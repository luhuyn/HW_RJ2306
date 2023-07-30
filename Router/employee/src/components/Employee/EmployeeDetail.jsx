import React from 'react';
import { Link } from 'react-router-dom';
import employees from '../Employee/employeeData'; 

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
