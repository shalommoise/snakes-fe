import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class CopyUrl extends Component {
   state = {
    value: this.props.url,
    copied: false,
    
  };
  render() {
    return (
      <div>
       

   

        {this.state.copied ? <span style={{color: 'red'}}>Copied. Send to your friend</span> :      <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>}
      </div>
   
    );
  }
}

export default CopyUrl;