import React, { Component } from 'react';
import PosCost from './PosCost';
import './RoomPirate.css';


class RoomPirate extends Component {
  render() { 
    return (
      <div className="RoomPirate" id={this.props.id}>
        <PosCost id={'pos_1'} isChosen={false} price={this.props.price[0]}/>
        <PosCost id={'pos_2'} isChosen={false} price={this.props.price[1]}/>
      </div>
    );
  }
}

export default RoomPirate;
