import React, { Component } from 'react';
import BtnRandom from '../media/random.svg';
import './BoatDice.css'

class BoatDice extends Component {
	constructor(props) {
    super(props);
    this.handleRandom = this.handleRandom.bind(this);
    this.eachRandom = this.eachRandom.bind(this);
    var rNums = props.boats.map(() => '?');
    
    this.state = {
      randomNum: rNums,
      isRandom:false,
      MaxRandomTime:4
    };
  }
  // componentDidMount() { }
  // componentWillUnmount() { }
  handleRandom(){
    if(this.state.isRandom){return;}

    const MaxRandomTime = this.state.MaxRandomTime;
    const randomID = setInterval(() => this.eachRandom(),300);
    var rNums = this.props.boats.map(() => '?');
    this.setState({
      isRandom:true,
      randomTime:0,
      randomNum:rNums,
      randomID: randomID
    })

  }
  eachRandom(){
    if(this.state.randomTime>this.state.MaxRandomTime){
      clearInterval(this.state.randomID);
      this.setState({
        isRandom:false,
        //randomTime:0,
        randomID: null
      });
      return;
    }
    var rNums = this.props.boats.map(() => Math.floor(Math.random() * 6)+1);
    this.setState((prevState, props) => ({
      randomTime: prevState.randomTime + 1,
      randomNum: rNums
    }))

  }
  render() { 
    const items = this.props.boats.map((val,index) => {
      const isIncVisible = this.props.showInc ? <button className='DiceInc'>+</button> : null;
      const isDecVisible = this.props.showDec ? <button className='DiceDec'>-</button> : null;
      return (
        <div className='DiceItem' key={index}>
        {isIncVisible}
        <p className='RandomNum' >{this.state.randomNum[index]}</p>
        {isDecVisible}
        </div>
      );
    });
    return (
      <div className='BoatDice' id={this.props.id}>
        <img id='BtnRandom' src={BtnRandom} onClick={this.handleRandom}/>
        {items}
      </div>
    );
  }
}

export default BoatDice;