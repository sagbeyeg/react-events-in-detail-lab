import React from 'react'

export default class DelayedButton extends React.Component {
  clickHandler = (e) => {
    e.persist()
    return setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }
  
  render() {
    return(
      <button onClick={this.clickHandler}>Delayed Button!!!!</button>
    )
  }
}