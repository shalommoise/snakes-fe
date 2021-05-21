import React from 'react';
import {  Link } from "@reach/router";
const Home = () => {
  return (
    <div  className="frame">
      <h2>Home</h2>
<div  className="instruction_selection">
     
      <Link className="Links" to="/single-player">Single-Player</Link>
      <Link className="Links" to="/multi-player">Multi-Player</Link>
     <Link className="Links" to="/instructions">Instructions</Link>
    </div>
    </div>
  );
};

export default Home;