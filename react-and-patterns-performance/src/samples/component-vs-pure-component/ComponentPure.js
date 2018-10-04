import React from 'react'

export default class ComponentPure extends React.PureComponent {
  render () {
    console.log('Render Pure')
    return (<p>{ this.props.message }</p>)
  }
}
