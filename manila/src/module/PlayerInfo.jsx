import React, { Component } from 'react';
import ImgCash from '../media/cash.svg';
import Stock1 from '../media/stock1.svg';
import Stock2 from '../media/stock2.svg';
import Stock3 from '../media/stock3.svg';
import Stock4 from '../media/stock4.svg';
import Partner1 from '../media/partner1.svg';
import Partner2 from '../media/partner2.svg';
import Partner3 from '../media/partner3.svg';
import Partner4 from '../media/partner4.svg';
import './PlayerInfo.css';


class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    // this.handleRandom = this.handleRandom.bind(this);
    // this.eachRandom = this.eachRandom.bind(this);
    // var rNums = props.boats.map(() => '?');
    
    this.state = {
      stocks:[
        null,
        Stock1,
        Stock2,
        Stock3,
        Stock4
      ],
      partners:[
        null,
        Partner1,
        Partner2,
        Partner3,
        Partner4
      ]
    };
  }

  render() { 
  	//伙伴数量
    //钱
    //股票数量
    const stocks = this.props.stocks.map((stock, index) => {
      return (
        <div className='EachStock' id={stock.id}>
          {'股票'}<img className='ImageStock' src={this.state.stocks[stock.id]}/> * {stock.count}
        </div>
      );
    });
    //总资产价值
    return (
      <div className="PlayerInfo" id={this.props.id}>
      	<div className='partner'>
          {'伙伴'}<img className='ImagePartner' src={this.state.stocks[this.props.partner_id]}/> * {this.props.partner_count}
        </div>
        <div className='cash'>
          {'现金'}<img className='PlayerCash' src={ImgCash} /> * {this.props.cash}
        </div>
        {stocks}
      </div>
    );
  }
}

export default PlayerInfo;
