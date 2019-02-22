/* global customElements, google */
import { html, LitElement } from 'lit-element'
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer'
class MapElement extends LitElement {
  constructor () {
    super()
    this.map = {}
    this.lat = 0
    this.lng = 0
  }

  static get properties () {
    return {
      map: {
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

  render () {
    return html`
      <style>
        :host {
          display: block;
          height: 100%;
        }
        #map {
          height: 100%;
          min-height: 100%;
        }
      </style>
      <div id="map"></div>
      <slot></slot>
    `
  }

  initMap () {
    const mapElement = this.shadowRoot.querySelector('#map')
    const position = {lat: this.lat, lng: this.lng}
    console.log(position)
    this.map = new google.maps.Map(mapElement, {
      center: position,
      zoom: 15
    })
  }

  firstUpdated (changedProperties) {
    this.initMap()
    const slot = this.shadowRoot.querySelector('slot')
    this._observer = new FlattenedNodesObserver(slot, (info) => {
      const { addedNodes } = info
      addedNodes.forEach(node => {
        if (node.draw) {
          node.draw(this.map)
        }
      })
    })
  }
}

customElements.define('map-element', MapElement)
