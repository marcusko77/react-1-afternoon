import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            unfilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',

            filteredArray: [],
        }

    }

    handleChange(val){
        this.setState({userInput: val});
    }

    filterArray(prop){
        var arr = this.state.unfilteredArray;
        var farr = [];
        
        for(var i = 0; i < arr.length; i++){
            if( arr[i].hasOwnProperty(prop)){
                farr.push(arr[i]);
            }
        }


        
        this.setState({filteredArray:farr})
    }
    

  render() {
    return (
    <div className = "puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
         <span className = "puzzleText"> unFiltered: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
        <input className = "inputLine" onChange = { (e) => this.handleChange(e.target.value) }></input>
         <button className = "confirmationButton" onClick = {() => this.filterArray(this.state.userInput)}>Filter</button>
        <span className = "resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>

    </div>
    )
  }
}