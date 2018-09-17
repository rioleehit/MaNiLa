import React, { Component } from 'react';
import './PosPrize.css'
class PosPrize extends Component {
	
  render() {
    return (
    	<div className='PosPrize' >
        {this.props.prize}
      </div>
    );
  }
}

export default PosPrize;