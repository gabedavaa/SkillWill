import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>About John Doe</h2>
      <p>Add general information about John Doe here.</p>
    </div>
  );
};

export default About;
