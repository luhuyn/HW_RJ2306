import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email === "admin@gmail.com" && password === "letmein") {
        onLogin({ email, password });
        navigate("/home");
      } else {
        alert("Invalid email or password!");
      }
    };
  
    return (
      <div className="container">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;