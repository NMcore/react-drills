import React, { Component } from 'react';

class ToDo extends Component {
    constructor()   {
        super();
        this.state = {
            todos: [],
            inputText: '',
        };
    }

    handleChange = (e) => {
        this.setState({ inputText: e.target.value });
    }
    
    handleClick = () => {
        const newTodos = [...this.state.todos];
        newTodos.push(this.state.inputText);
        this.setState({todos: newTodos, inputText: '' });
    }
    
    render (){
        console.log(this.state)
        return (
            <div>
                <h1>My ToDo list!</h1>
                <input 
                value={this.state.inputText}
                onChange={this.handleChange} />
                <button onClick={this.handleClick}>Add to list</button>
                <ul>{this.state.todos.map(todo => <li>{todo}</li>)}</ul>
            </div>
        )
    }
}

export default ToDo;