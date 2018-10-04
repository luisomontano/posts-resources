import React from 'react'

export default class ComponentNormal extends React.Component {
  render () {
    console.log('Render normal')
    return (<p>{ this.props.message }</p>)
  }
}
