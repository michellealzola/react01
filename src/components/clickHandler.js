import React, { Component } from "react";

class ClickHandler extends Component
{
    constructor(props) {
      super(props)
    
      this.state = 
        {
            message: 'pending',            
        }
        // using bind below
        this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage()
    {
        this.setState({
            message: 'Corrected',            
        })
    }

    render()
    {
        return(
            <div>
                <p>
                {this.state.message}
                <button onClick={() => this.changeMessage()}>Click To Check</button>
                {/* below is without using the arrow function */}
                {/* <button onClick={this.changeMessage}>Click To Check</button> */}
                </p>           
            </div>            
        )
    }
}

export default ClickHandler;