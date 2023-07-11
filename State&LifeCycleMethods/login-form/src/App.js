import React, { useState } from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  const [form, setForm] = useState({ email: '', password: '', isRemember: false });
  const [isValid, setIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    checkValidForm();
  };

  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: checked }));
    checkValidForm();
  };

  const checkValidForm = () => {
    const { email, password } = form;
    setIsValid(email !== '' && password !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Home onLogout={handleLogout} />;
  }

  return (
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <form>
          <img className="mb-4" src="https://i.pinimg.com/564x/a5/cc/ae/a5ccae481f10590755a85c424e85fb27.jpg" alt="" width="100" height="100" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input className="form-control" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={handleChange} />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input className="form-control" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" name="isRemember" value={form.isRemember} onChange={handleChangeCheckbox} /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit}>Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2023</p>
        </form>
      </div>
    </div>
  );
}

export default App;
