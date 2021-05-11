import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class CopyUrl extends Component {
   state = {
    value: this.props.url,
    copied: false,
    
  };
  render() {
    const {copied, value} = this.state
    return (
      <div>
        

        {copied ? <span style={{color: 'red'}}>Copied. Send to your friend</span> :      <CopyToClipboard text={value}
          onCopy={() => this.setState({copied: true})}>
          <button>Send code to a friend</button>
        </CopyToClipboard>             
        }
      
      </div>
   
    );
  }
}

export default CopyUrl;