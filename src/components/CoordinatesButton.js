// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
  constructor() {
    super();

    this.state = {
      coordinates: []
    };
  }


  handleClick = (event) =>{
    // this.setState(this.state.coordinates: [event.clientX,event.clientY])
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
  }

  render(){
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}

export default CoordinatesButton;
