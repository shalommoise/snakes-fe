import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../../utils/api'
class OwnGameStart extends Component {
  state ={
    clicked: false,
    gameOn: false
  }
  makeGame = ()=>{
    api.changeNames(this.state._id, this.state.player1)
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.clicked !== this.state.clicked)
    api.postGame().then((game)=>{
      const {_id } = game; 
      this.setState({ _id})
    })
  }
  handleChange=(changeEvent)=>{
     const {value} = changeEvent.target;
     
     this.setState({player1: value, ready: true})
     api.changeNames(this.state._id, this.state.player1)
  }
  render() {
const {clicked, _id} = this.state
    return (
    
    <div >
        {!clicked ?  
         <div className="Links" onClick={()=>this.setState({clicked: true})}>Start your own Game</div> :
        <div>
          <label htmlFor="userName"></label>
          <input type="text" id="userName" name="userName" placeholder="Enter your username here" onChange={this.handleChange}/>
     <br/>   
     <br/>
  <Link className="Links" to={`/multi-player/${_id}/1`} onClick={this.makeGame} disabled={!this.state.ready}>Submit</Link> 
        </div>
       
         }  
      </div>
    );
  }
}

export default OwnGameStart;