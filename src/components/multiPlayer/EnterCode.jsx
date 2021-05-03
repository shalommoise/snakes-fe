import React, { Component } from 'react';
import {  Link } from "@reach/router";
class EnterCode extends Component {
  state = {
    clicked: false,
    userName: ''
  };
  handleChange=(event)=>{
    const {name, value} = event.target
    this.setState({[name]: value})
  }
  render() {
    const {game_id, clicked, userName} = this.state
    return (
      <div>
     {clicked ?  <div>
          <label htmlFor="userName"></label>
          <input type="text" id="userName" name="userName" placeholder="Enter your username here" onChange={this.handleChange}/>
     <br/>
      <label htmlFor="game_id"></label>
          <input type="text" id="game_id" name="game_id" placeholder="Past the code here" onChange={this.handleChange}/>
     <br/>
  {userName && game_id && <Link to={`/multi-player/${game_id}/2`} onClick={this.makeGame} >Submit</Link>} 
        </div> :   <span onClick={()=>this.setState({clicked: true})}>Enter code from Friend</span>}
      </div>
    );
  }
}

export default EnterCode;