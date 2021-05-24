import React , {Component} from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import SinglePlayer from "./components/SinglePlayer";
import Home from './components/Home';
import MultiPlayer from './components/MultiPlayer';
import Instructions from './components/Instructions';
import MultiPlayerGame from './components/multiPlayer/MultiPlayerGame';
import ErrorPage from './components/ErrorPage' 
import './App.css';
import {checkKey} from './utils/utils'

class App extends Component {
state ={
  movement: ""
}
  
 handleKeyDown = (e)=> {
 this.setState({movement: checkKey(e.keyCode, this.state.movement)})

 }
  render() {   
  return (
    <div className="App" onKeyDown={this.handleKeyDown}>
     <Header />

     <Router>
<Home path="/" />
<SinglePlayer path="/single-player" movement={this.state.movement}/>   
<MultiPlayer path="/multi-player" />
<Instructions path="/instructions"/>
<MultiPlayerGame path="/multi-player/:id/:player" movement={this.state.movement}/>
  <ErrorPage default />
     </Router>

<br/>

    </div>
  );
}
}
export default App;


