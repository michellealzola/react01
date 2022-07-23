import React, { Component } from "react";

class CheckBox extends Component {
    constructor(props) {
        super(props)
      
        this.state = 
          {
              message: '',            
          }
  
          this.changeMessage = this.changeMessage.bind(this);
      }
      changeMessage()
      {
          this.setState({
              message: 'Passed',            
          })
      }
  
      render()
      {
          return(
              <div>
                  <p>                  
                  <input type="checkbox" onClick={() => this.changeMessage()} />
                  {this.state.message}
                  </p>           
              </div>            
          )
      }
    }
  
  


export default CheckBox;