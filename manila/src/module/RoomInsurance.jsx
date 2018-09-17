import React, { Component } from 'react';
import PosCost from './PosCost';
import PosPrize from './PosPrize';
import './RoomInsurance.css';


class RoomInsurance extends Component {
  render() { 
    return (
      <div className="RoomInsurance" id={this.props.id}>
        <PosPrize prize={10}/>
        <PosCost id={'posCost'} isChosen={false} showText={'!'} price={0}/>
      </div>
    );
  }
}

export default RoomInsurance;
