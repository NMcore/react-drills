import React, { Component } from 'react'
import NewTask from "./NewTask";
import List from './List';


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
  }

  handleAddList = (task) => {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="testAlign">
          <h3>Updated To-Do List</h3>
          {/* pass function down with obj copy to NewTask and update app state*/}
          <NewTask add={this.handleAddList}/>
          {/* take app state and build up the list in the UI */}
          <List tasks={this.state.list}/>
      </div>
    )
  }
}