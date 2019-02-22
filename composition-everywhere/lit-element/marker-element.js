/* global customElements, google */
import { LitElement } from 'lit-element'

class MarkerElement extends LitElement {
  constructor () {
    super()
    this.map = {}
    this.marker = {}
    this.lat = 0
    this.lng = 0
  }

  static get properties () {
    return {
      map: {
        type: Object
      },
      marker: {
        type: Object
      },
      lat: {
        type: Number
      },
      lng: {
        type: Number
      }
    }
  }

  draw (map) {
    this.map = map
    const position = { lat: this.lat, lng: this.lng }
    this.marker = new google.maps.Marker({ position, map })
  }

  render () {
    return null
  }

  display () {
    console.log(this.lat)
  }
}

customElements.define('marker-element', MarkerElement)
