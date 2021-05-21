import React, { Component } from 'react';
import {  Link } from "@reach/router";
import * as api from '../../utils/api' 
class EnterCode extends Component {
  state = {
    clicked: false,
    userName: ''
  };
  handleChange=(event)=>{
    const {name, value} = event.target
    this.setState({[name]: value})
  }
  sendName =()=>{
    const {game_id, userName}= this.state
api.enterPlayer2(game_id, userName)
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
  {userName && game_id &&  <button onClick={this.sendName}> <Link className="Links" to={`/multi-player/${game_id}/2`}> Submit</Link> </button>} 
        </div> :   <div className="Links" onClick={()=>this.setState({clicked: true})}>Enter code from Friend</div>}
      </div>
    );
  }
}

export default EnterCode;