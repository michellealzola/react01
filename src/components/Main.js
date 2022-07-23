import React, { Component } from "react";

class Main extends Component
{
    constructor()
    {
        super();
        this.state = 
        {
            message: 'Welcome Visitors!',
            message1: 'Hello'
        }
    }

    changeMessage()
    {
        this.setState({
            message: 'Thank you for subscribing',
            message1: 'Hi'
        })
    }

    render()
    {
        return(
            <div>
                <p>
                {this.state.message}
                </p>
                <p>
                {this.state.message1}
                </p>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>            
        )
    }
}

export default Main;