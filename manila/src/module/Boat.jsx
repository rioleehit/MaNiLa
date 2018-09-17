import React, { Component } from 'react';
import './Boat.css'
import PosCost from './PosCost'
import PosPrize from './PosPrize'
class Boat extends Component {
	
  render() {
  	const buttons = this.props.button_price.map((val, index) => {
      return (
        <PosCost id={index} usrColor='black' price={val} className='boat_button' onClick={()=>{ console.log('hi'); }} key={index} />
      );
    });
    return (
    	<div className='Boat' id={this.props.id}>
    		<PosPrize prize={this.props.prize} />
    		<div className='BoatPanel'>
    			{buttons}
    		</div>
    	</div>
    );
  }
}

export default Boat;