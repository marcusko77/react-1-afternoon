import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super()

        this.state = {
            unfilteredArray: ['mike', 'marcus', 'george', 'devin', 'madi'],
            userInput: '',
            filteredArray: [],
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    fString(userInput){
        var arr=this.state.unfilteredArray 
        var farr= [];
        for(var i = 0; i < arr.length;i++){
          if( arr[i].includes(userInput)){
              farr.push(arr[i]);
          }
        }
        

        this.setState({filteredArray:farr})
    }



  render() {
    return (
        <div className = "puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className = "puzzleText">unfiltered {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
            <input className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)}></input>
            <button className = "confirmationButton" onClick = {() => this.fString(this.state.userInput)}>Filter</button>
            <span className = "resultsBox filterStringPB">filtered {JSON.stringify(this.state.filteredArray, null, 10)}</span>


        </div>

    )
  }
}