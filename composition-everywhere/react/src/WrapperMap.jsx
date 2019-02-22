import React from 'react'
import Map from './Map.jsx'
import Marker from './Marker.jsx'

export default class WrapperMap extends React.Component {
  constructor (props) {
    super(props)
    this.style = {
      height: '100%',
      width: '100%'
    }
    const center = { lat: 19.412120, lng: -99.180642 }
    this.options = {
      center,
      zoom: 16
    }
  }

  render () {
    return (
      <div style={this.style}>
        <Map style={this.style} options={this.options}>
          <Marker position={{ lat: 19.412120, lng: -99.180642 }} />
        </Map>
      </div>
    )
  }
}
