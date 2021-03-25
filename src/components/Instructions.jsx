import React from 'react';
import {  Link } from "@reach/router";

const Instructions = () => {
  return (
    <div>
      <h2>Instructions</h2>
      <p>Explaining how to play</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Instructions;