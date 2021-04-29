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
  componentDidMount(){
    api.postGame().then((game)=>{
      const {_id } = game; 
      this.setState({ _id})
    })
  }
  handleChange=(changeEvent)=>{
     const {value} = changeEvent.target;
     
     this.setState({player1: value, ready: true})
  }
  render() {
const {clicked, _id} = this.state
    return (
    
    <div >
        {!clicked ?  
         <div className="icon" onClick={()=>this.setState({clicked: true})}>Start your own Game</div> :
        <div>
          <label htmlFor="userName"></label>
          <input type="text" id="userName" name="userName" placeholder="Enter your username here" onChange={this.handleChange}/>
     <br/>
  <Link to={`/multi-player/${_id}`} onClick={this.makeGame} disabled={!this.state.ready}>Submit</Link> 
        </div>
       
         }  
      </div>
    );
  }
}

export default OwnGameStart;