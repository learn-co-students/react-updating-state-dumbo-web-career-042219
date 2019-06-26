// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component {

    constructor() {
        super();

        // Define the initial state
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
        };
    }

    //function to handle click
    handleClick = () => {
        //Update the state
        this.setState({
            hasBeenClicked: true
        })
    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button
                onClick={this.handleClick}
                >Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;