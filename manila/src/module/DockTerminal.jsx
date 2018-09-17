import React, { Component } from 'react';
import PosCost from './PosCost';
import PosPrize from './PosPrize';
import './DockTerminal.css';


class DockTerminal extends Component {
  render() { 
    return (
      <div className="DockTerminal" id={this.props.id}>
        <PosPrize id={'posPrize'} isChosen={false} prize={this.props.prize}/>
        <PosCost id={'posCost'} isChosen={false} price={this.props.price}/>
      </div>
    );
  }
}

export default DockTerminal;
