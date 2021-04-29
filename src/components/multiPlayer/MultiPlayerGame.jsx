import React, { Component } from 'react';
import * as api from '../../utils/api'
class MultiPlayerGame extends Component {
componentDidMount(){

  api.getSingleGame(this.props.id).then((game)=>{
    console.log(game)
  })
}
  render() {
    return (
      <div>
        multiPlayer game on
      </div>
    );
  }
}

export default MultiPlayerGame;