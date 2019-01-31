import React, { Component } from 'react'
import { Machine } from 'react-xstate-js'
export function withMachine (WrappedComponent, config, options) {
  return class extends Component {
    render () {
      return (<Machine
        config={config}
        options={options}>
        {({ service, state }) => (
          <WrappedComponent service={service} state={state} />
        )}
      </Machine>)
    }
  }
}
