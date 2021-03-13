import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      itemsToLit: ['cars', 'boats', 'airplanes', 'motorcycle']
    }
  }

  render() {
    return (
      <div className="testAlign">
        {this.state.itemsToLit.map((players) =>
          <h1>{players}</h1>
        )}
      </div>
    )
  }
}




