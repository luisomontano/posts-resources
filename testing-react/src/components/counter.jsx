import React, { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter () {
    const counter = this.state.counter + 1
    this.setState({ counter })
  }

  render () {
    return (
      <div onClick={this.incrementCounter}>{this.state.counter}</div>
    )
  }
}
