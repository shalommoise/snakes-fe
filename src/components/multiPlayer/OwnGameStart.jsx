import React, { Component } from 'react';

class OwnGameStart extends Component {
  state ={
    clicked: false
  }
  makeGame = ()=>{

  }
  handleChange=(changeEvent)=>{
     const {value} = changeEvent.target;
     
     this.setState({player1: value, ready: true})
  }
  render() {
const {clicked} = this.state
    return (
    
    <div>
        {clicked ?  
        <div>Start your own Game</div> :
        <div>
          <label htmlFor="userName"></label>
          <input type="text" id="userName" name="userName" placeholder="Enter your username here" onChange={this.handleChange}/>
     <br/>
     <button onClick={this.makeGame} disabled={!this.state.ready}>Submit</button>
        </div>
         }  
      </div>
    );
  }
}

export default OwnGameStart;