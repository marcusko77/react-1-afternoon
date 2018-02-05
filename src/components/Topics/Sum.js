import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
        super()

        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }
    handleChange1(val){
        this.setState({num1: parseInt(val,10)})
    }

    handleChange2(val){
        this.setState({num2: parseInt(val,10)})
    }

    sum(num1,num2){
        var sum = num1+num2;

        this.setState({sum:sum})
    }


  render() {
    return (
        <div className = 'puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className = 'inputLine' onChange = {(e) => this.handleChange1(e.target.value)}/>
            <input className = 'inputLine' onChange = {(e) => this.handleChange2(e.target.value)}/>
            <button className = 'confirmationButton'onClick = {() => this.sum(this.state.num1,this.state.num2)}>check</button>
            <span className = 'resultsBox'>{JSON.stringify(this.state.sum)}</span>
        </div>
    )
  }
}