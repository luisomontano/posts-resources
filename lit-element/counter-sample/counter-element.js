/* global customElements */
import { html, LitElement } from 'lit-element'

class CounterElement extends LitElement {
  constructor () {
    super()
    this.count = 0
  }

  static get properties () {
    return {
      count: Number
    }
  }

  incrementCount () {
    this.count = this.count + 1
  }
  render () {
    return html`
      <h1>My Counter</h1>
      <div @click="${this.incrementCount}">${this.count}</div>
    `
  }
}

customElements.define('counter-element', CounterElement)
