import React from 'react'
import ComponentNormal from './ComponentNormal'
import ComponentPure from './ComponentPure'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      message: 'Hola'
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState () {
    this.setState({
      message: 'Hola'
    })
  }
  render () {
    return (
      <div>
        <ComponentNormal message={this.state.message} />
        <ComponentPure message={this.state.message} />
        <button onClick={this.changeState}>Change state</button>
      </div>
    )
  }
}
