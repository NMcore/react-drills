import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: ['cars', 'boats', 'airplanes', 'motorcycle'],
      input: '',
    }
  }

  onChangeHandler(e) {
    this.setState({
      input: e.target.value,
    })
  }

  render() {
    const list = this.state.users
      .filter(x => this.state.input === '' || x.includes(this.state.input))
      .map((x, index) => 
      <li key={index}>{x}</li>);

    return (
      <div className="testAlign">
        <input 
        value={this.state.input} 
        type="text" 
        onChange={this.onChangeHandler.bind(this)} 
        />
        <ul>{list}</ul>
      </div>
    )
  }
}