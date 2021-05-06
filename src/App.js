import React from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import SinglePlayer from "./components/SinglePlayer"
import Home from './components/Home'
import MultiPlayer from './components/MultiPlayer'
import Instructions from './components/Instructions'
import MultiPlayerGame from './components/multiPlayer/MultiPlayerGame'
import './App.css';

function App() {

  return (
    <div className="App">
     <Header />

     <Router>
<Home path="/" />
<SinglePlayer path="/single-player"/>   
<MultiPlayer path="/multi-player"/>
<Instructions path="/instructions"/>
<MultiPlayerGame path="/multi-player/:id/:player"/>
     </Router>
<br/>

    </div>
  );
}

export default App;
