import React, { Component } from 'react';
import Boat from './Boat';
import BoatDice from './BoatDice';
import './SeaRoute.css';


class SeaRoute extends Component {

  constructor(props) {
    super(props);
    // this.handleRandom = this.handleRandom.bind(this);
    // this.eachRandom = this.eachRandom.bind(this);
    const baseBoat = {
      boat1:{
        id:'boat1',
        prize:18,
        price:[1,2,3]
      },
      boat2:{
        id:'boat2',
        prize:30,
        price:[3,4,5]
      },
      boat3:{
        id:'boat3',
        prize:24,
        price:[2,3,4]
      },
      boat4:{
        id:'boat4',
        prize:36,
        price:[3,4,5,5]
      },
    }
    const boats = props.boats.map((val, index) => {
      return baseBoat[val];
    });
    this.state = {
      boats:boats,
      rowNum: 14
    };
  }

  RouteItem(boat,route_step){
    return(
      <div className='Item' key={route_step}>
        {"("+boat.id+","+route_step+")"}
      </div>
    );
  }
  RouteLine(boat){
    var line=[];
    for (var i = this.state.rowNum; i >= 0; i--) {
      line.push(this.RouteItem(boat,i));
    }
    return (
      <div className='Line' key={boat.id}>
        <Boat className='Boat' id={boat.id} prize={boat.prize} button_price={boat.price}/>
        {line}

      </div>
    );
  }
  render() { 
    const l1 = this.RouteLine(this.state.boats[0]);
    const l2 = this.RouteLine(this.state.boats[1]);
    const l3 = this.RouteLine(this.state.boats[2]);
    return (
      <div className="SeaRoute" id={this.props.id}>
        {l1}
        {l2}
        {l3}
        <BoatDice id='boat_dice' showInc={true} showDec={true} boats={['boat1','boat2','boat3']}/>
      </div>
    );
  }
}

export default SeaRoute;
