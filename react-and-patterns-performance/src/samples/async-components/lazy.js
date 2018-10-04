import React from 'react'
export default function lazy (importPromise) {
  class LazyComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        Component: null
      }
    }
    componentWillMount () {
      if (!this.state.Component) {
        importPromise()
          .then(Component => {
            this.setState({ Component })
          })
      }
    }
    render () {
      const { Component } = this.state
      return Component ? <Component {...this.props} /> : null
    }
  }
  return LazyComponent
}
