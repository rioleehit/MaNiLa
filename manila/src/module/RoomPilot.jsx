import React, { Component } from 'react';
import PosCost from './PosCost';
import './RoomPilot.css';


class RoomPilot extends Component {
  render() { 
    return (
      <div className="RoomPilot" id={this.props.id}>
        <PosCost id={'pos_'+this.props.id} isChosen={false} price={this.props.price}/>
        <a >step * {this.props.MaxStep}</a>
      </div>
    );
  }
}

export default RoomPilot;
