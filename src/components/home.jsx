import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div id="home">
      <h1>this is home</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
    </div>
    )
}

export default Home;
