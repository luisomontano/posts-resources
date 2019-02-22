import React from 'react'
import google from 'google'
export default class Map extends React.Component {
  constructor (props) {
    super(props)
    this.mapRef = React.createRef()
    this.map = null
  }

  renderChildren () {
    const {children} = this.props

    if (!children) return null

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        mapCenter: this.props.options.center
      })
    })
  }

  componentDidMount () {
    this.loadMap()
  }

  loadMap () {
    this.map = new google.maps.Map(this.mapRef.current, this.props.options)
    this.forceUpdate()
  }

  render () {
    return (
      <div ref={this.mapRef} {...this.props}>
        {this.renderChildren()}
      </div>
    )
  }
}
