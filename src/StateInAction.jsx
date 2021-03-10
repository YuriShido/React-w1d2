import React, { Component } from 'react'

class StateInAction extends Component {

  constructor() {
    super()
    this.state = {
      text: 'state is now in action'
    }
    setTimeout(() => {
        this.setState({
          text: 'State has Changed....'
        })
    }, 2000)
  }
  // this.setState({
  //   text: 'This is a safe modification'
  // })
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        
      </div>
    )
  }
}

export default StateInAction;




