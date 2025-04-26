import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Contacts App</h1>
      <p>Manage your contacts easily!</p>
      <Link to="/register">Register</Link> or <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
