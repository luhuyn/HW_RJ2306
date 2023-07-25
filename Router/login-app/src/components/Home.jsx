
import React from "react";
import "../index.css"

const Home = ({ user, onLogout }) => {
    const handleLogoutClick = () => {
      onLogout();
    };
  
    return (
      <div>
        <h2>Home</h2>
        {user ? (
          <div>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <button onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <p>You are not logged in!</p>
        )}
      </div>
    );
  };
  
  export default Home;
