import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
    this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
    this.loginUser = this.loginUser.bind(this)
  }


  handleUpdateUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleUpdatePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  loginUser() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}` )
  }

  render() {
    return (
      <div className="testAlign">
        <input
          onChange={this.handleUpdateUsername}
        />
        <input
          onChange={this.handleUpdatePassword}
        />
        <button
        onClick={this.loginUser}>I'm a button Hi</button>
      </div>
    )
  }
}
