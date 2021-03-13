import React, { Component } from 'react';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div>
        <Image 
        url="https://via.placeholder.com/300/09f/fff.png"
        alt="Happy Image"
        />
      </div>
    )
  }
}

export default App;
