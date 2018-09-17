import React, { Component } from 'react';
import Boat from './Boat';
import Dice from './Dice';
import BoatDice from './BoatDice';
import SeaRoute from './SeaRoute';
import RoomPilot from './RoomPilot';
import RoomPirate from './RoomPirate';
import RoomInsurance from './RoomInsurance'
import './DebugPanel.css';


class DebugPanel extends Component {
  render() { 
    return (
      <div className="DebugPanel">

        <Boat id='boat1' prize={18} button_price={[1,2,3]}/>
        <br/>
        <Boat id='boat2' prize={30} button_price={[3,4,5]}/>
        <br/>
        <Boat id='boat3' prize={24} button_price={[2,3,4]}/>
        <br/>
        <Boat id='boat4' prize={36} button_price={[3,4,5,5]}/>

        <Dice id='single_dice' showInc={true} showDec={true} />

        <BoatDice id='debug_boat_dice' showInc={true} showDec={true} boats={['boat4','boat2','boat3']}/>

        <RoomPilot id='pilot1' price={2} MaxStep={1}/>

        <RoomPilot id='pilot2' price={5} MaxStep={2}/>

        <RoomPirate id='pirate' price={[5,5]} />

        <RoomInsurance />
        
        <SeaRoute id='sea_route'boats={['boat4','boat2','boat3']}/>
      </div>
    );
  }
}

export default DebugPanel;
