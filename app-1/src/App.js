import React, { Component } from 'react'

export default class App extends Component {
  state= {
    displayTxt: ''
  };
  
  handleChange = (e) => {
    this.setState({ displayTxt: e.target.value});
  };
  
  render() {
    return (
      <div className="testAlign">
        <input 
          value={this.state.displayTxt}
          onChange={this.handleChange}
        />
        <div>{this.state.displayTxt}</div>
      </div>
    )
  }
};