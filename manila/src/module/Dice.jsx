import React, { Component } from 'react';
import './Dice.css';


class Dice extends Component {
  constructor(props) {
    super(props);
    this.handleRandom = this.handleRandom.bind(this);
    this.eachRandom = this.eachRandom.bind(this);
    this.state = {
      randomNum: '?',
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
    this.setState({
      isRandom:true,
      randomTime:0,
      randomNum:'?',
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
    this.setState((prevState, props) => ({
      randomTime: prevState.randomTime + 1,
      randomNum:Math.floor(Math.random() * 6)+1
    }))

  }
  render() { 
    const isIncVisible = this.props.showInc ? <button className='DiceInc'>+</button> : null;
    const isDecVisible = this.props.showDec ? <button className='DiceDec'>-</button> : null;;
    return (
      <div className='Dice' id={this.props.id}>
        {isIncVisible}
        <button className='DiceBtn' onClick={() => this.handleRandom()}>
          <a className='RandomNum' id='FadeTo'>{this.state.randomNum}</a>
        </button>
        {isDecVisible}
      </div>
    );
  }
}

export default Dice;
