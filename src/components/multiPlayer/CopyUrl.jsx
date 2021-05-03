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
       

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{color: 'red'}}>Copied. Send to your friend</span> : <p>Send this address to your friend</p>}
      </div>
   
    );
  }
}

export default CopyUrl;