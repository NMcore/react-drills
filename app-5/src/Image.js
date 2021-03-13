import React, { Component } from 'react'
//passing in image prop example as a class component
class Image extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {
            url,
            alt
        } = this.props

        return (
        <header className="testAlign">
            <img src={url} alt={alt}/> 
        </header>
        )
    }
}


//passing in image prop as a functional component 
const ImageA = (props) => {
    return (
        <footer>
            <img src={props.url} alt={props.alt}/> 
        </footer>
    );
}

export default Image;





