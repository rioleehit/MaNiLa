import React, { Component } from 'react';
import Boat from './Boat';
import Dice from './Dice';
import BoatDice from './BoatDice';
import SeaRoute from './SeaRoute';
import RoomPilot from './RoomPilot';
import RoomPirate from './RoomPirate';
import RoomInsurance from './RoomInsurance';
import DockTerminal from './DockTerminal';
import StockBoard from './StockBoard';
import PlayerInfo from './PlayerInfo';
import './DebugPanel.css';


class DebugPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks:[
            {id:1,count:2},
            {id:2,count:3},
            {id:3,count:1},
            {id:4,count:2}
        ]
    };
  }
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
        <PlayerInfo id='playerInfo' partner_id='1' partner_count={4} cash={40} stocks={this.state.stocks}/>
        <DockTerminal id='destination1' price={4} prize={6} />
        <DockTerminal id='destination2' price={3} prize={8} />
        <DockTerminal id='destination3' price={2} prize={15} />
        <DockTerminal id='repair1' price={4} prize={6} />
        <DockTerminal id='repair2' price={3} prize={8} />
        <DockTerminal id='repair3' price={2} prize={15} />

        <StockBoard id='stockBoard' stockPrice={[{id:1,price:10,isSold:false},{id:2,price:5,isSold:true},{id:3,price:5,isSold:true},{id:4,price:15,isSold:false}]} />

        <SeaRoute id='sea_route'boats={['boat4','boat2','boat3']}/>

      </div>
    );
  }
}

export default DebugPanel;
