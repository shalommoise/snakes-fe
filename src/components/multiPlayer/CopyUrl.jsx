import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {isMultiPlayer} from '../../utils/api'
class CopyUrl extends Component {
   state = {
    value: this.props.url,
    copied: false,
    randomPlayerJoin: this.props.randomPlayerJoin
  };
  copy =()=>{
    const {randomPlayerJoin, value} = this.state;
      isMultiPlayer(value, !randomPlayerJoin)
      this.setState({randomPlayerJoin: !randomPlayerJoin, copied: true})
  }
  render() {
    const { value, randomPlayerJoin, copied} = this.state
    return (
      <div>
        
      {copied ? randomPlayerJoin ? <p>waiting for someone to join</p> : <span style={{color: 'red'}}>Copied. Send to your friend</span> : 
       <CopyToClipboard text={value}
          onCopy={this.copy}>
          <button>Send code to a friend</button>
        </CopyToClipboard>   
           
      }
     {!copied && <button onClick={()=>this.setState({copied:true})}>Wait for random player to join</button> }
     
      
      </div>
   
    );
  }
}

export default CopyUrl;