import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { pokedex } from './state'
import PokemonFilter from '../components/PokemonFilter/index.jsx'

 // eslint-disable-line no-use-before-define
@observer
class PokemonFilterMobX extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  handleChange (event) {
    event.preventDefault()
    event.stopPropagation()
    pokedex.setFilter(event.target.value)
  }
  render () {
    return (
      <PokemonFilter
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        value={this.props.value} />
    )
  }
}

export default PokemonFilterMobX
