import React from 'react'

export default class CoordinatesButton extends React.Component {
  
  clickHandler = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }
  
  render() {
    return(
      <div>
      <button onClick={this.clickHandler}>Coordinates Button!!!!</button>
      </div>
    )
  }
}