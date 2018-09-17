import React, { Component } from 'react';
import './PosCost.css'
class PosCost extends Component {
	
  render() {
    const btnView = this.props.isChosen ? null : this.props.showText ? this.props.showText : this.props.price;
    const bStyle = this.props.isChosen ? 'bord-style:solid;bord-color:black;' : 'bord-style:dotted;bord-color:'+this.props.usrColor;
    return (
    	<button className='PosCost' style={{bStyle}}>
      {btnView}
    	</button>
    );
  }
}

export default PosCost;