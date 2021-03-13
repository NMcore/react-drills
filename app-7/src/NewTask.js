import React, { Component } from 'react'

export default class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            input: ""
        }
    }

handleInputChange = (value) => {
    this.setState({ input: value });
}

handleAdd = () => {
    //access method from app with copy of object // add copy of app state obj to input with method?
    //I believe this is just to get the values out of NewTask back up to app
    this.props.add( this.state.input );
    this.setState({ input: "" });
}


    render() {
        return (
            <div>
                <input
                value={ this.state.input }
                placeholder="Todo's or task, we don't know"
                onChange={e => this.handleInputChange(e.target.value)}
                />
                <button onClick={ this.handleAdd }>Put it on this list</button>
            </div>
        )
    }
}