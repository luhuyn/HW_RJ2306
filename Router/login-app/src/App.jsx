import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import "./index.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleHomeClick = () => {
    if (!loggedInUser) {
      alert("You are not logged in!");
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            {loggedInUser ? (
              <li>
                <Link to="/home" onClick={handleHomeClick}>
                  Home
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/home"
            element={<Home user={loggedInUser} onLogout={handleLogout} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
