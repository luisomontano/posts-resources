import React from 'react'
import google from 'google'

export default class CustomMarker extends React.Component {
  componentDidUpdate (prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
      this.renderMarker()
    }
  }

  componentDidMount () {
    if (this.props.map && this.props.position) {
      this.renderMarker()
    }
  }

  componentWillUnmount () {
    if (this.marker) {
      this.marker.setMap(null)
    }
  }

  renderMarker () {
    let {
      map, position
    } = this.props
    const options = {
      map: map,
      position: position
    }
    this.marker = new google.maps.Marker(options)
    this.map = map
  }

  render () {
    return null
  }
}
