import React, { Component } from 'react';
import PosCost from './PosCost';
import PosPrize from './PosPrize';
import './StockBoard.css';


class StockBoard extends Component {

  render() { 
  	const eachStocks = this.props.stockPrice.map((val, index) => {
  		return (
  			<div className='StockItem' id={val.id} key={index}>
  				<div className='StockPrice'>{val.price}</div>
  				<button className='btnBuy'>{val.isSold ? '赎回' : '买入'}</button>
				<button className='btnSell'>抵押</button>
  			</div>
  		);
  	});
    return (
      <div className="StockBoard" id={this.props.id}>
      	{eachStocks}
      </div>
    );
  }
}

export default StockBoard;
