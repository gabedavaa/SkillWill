import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>John Doe</h1>
      <img src="john-doe-photo.jpg" alt="John Doe" />
      <p>Click to explore more:</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
