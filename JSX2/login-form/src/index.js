import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';

const SignInForm = () => {
  return (
    <div className="container d-flex align-items-center text-center">
      <div className="form-signin">
        <form>
          <img className="mb-4" src="https://i.pinimg.com/564x/a5/cc/ae/a5ccae481f10590755a85c424e85fb27.jpg" alt="" width="100" height="100" />
          <h1 className="h3 mb-3 fw-normal">Sign in</h1>
          <div className="form-floating">
            <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2023</p>
        </form>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignInForm />);
