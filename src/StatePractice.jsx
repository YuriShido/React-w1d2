import React, { Component } from 'react'

export class StatePractice extends Component {

  constructor() {
    super()

    this.state = {
      testText : '',
      imageWidth : ''
    }
  }

  handleFocus = () => {
    this.setState({
    
      testText : "You agree the site terms of service when you filled out this form!!!"
    }) 
  }

  handleMouseEnter = () => {
    this.setState({
      testText: ''
    })
  }

  handleLoad = (e) => {
    // console.log(e.target.width)
    this.setState({
      imageWidth: e.target.width
    })

    if(e.target.width > 100){
      console.log("Your image is big!")
    }
  }

  render() {
    return (
      <div>
        {/* <h1>Test</h1> */}
        <input type="text" onFocus={this.handleFocus}/>
        <h3 onMouseEnter={this.handleMouseEnter}>{this.state.testText}</h3>
        <img onLoad={this.handleLoad} src="https://picsum.photos/200/300" alt="random phtos"/>
      </div>
    )
  }
}

export default StatePractice
