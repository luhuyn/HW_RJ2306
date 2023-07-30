import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Employee from './components/Employee/Employee';
import EmployeeDetail from './components/Employee/EmployeeDetail';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




