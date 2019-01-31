import React, { Component } from 'react'
import PokemonFilter from '../components/PokemonFilter/index.jsx'
import { pokemonService } from './PokemonMachine'

class PokemonFilterXState extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      filter: ''
    }
  }

  componentDidMount () {
    pokemonService
      .onTransition(state => {
        const { filter = '' } = state.context
        this.setState({ filter })
      })
  }
  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  handleChange (event) {
    event.preventDefault()
    event.stopPropagation()
    pokemonService.send({ type: 'CHANGE', data: event.target.value })
  }
  render () {
    return (
      <PokemonFilter
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        value={this.state.filter} />
    )
  }
}

export default PokemonFilterXState
