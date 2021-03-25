import React from 'react';
import {  Link } from "@reach/router";
const Home = () => {
  return (
    <div>
      <h2>Home</h2>

 <Link to="/single-player">Single-Player</Link>
 <br/>
  <Link to="/multi-player">Multi-Player</Link>
  <br/>
   <Link to="/instructions">Instructions</Link>
    </div>
  );
};

export default Home;