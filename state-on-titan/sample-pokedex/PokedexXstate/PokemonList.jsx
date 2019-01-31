import React, { Component } from 'react'
import PokemonList from '../components/PokemonList/index.jsx'
import { pokemonService } from './PokemonMachine'
function filterPokemons (filter) {
  return function filterClosure (pokemon) {
    return pokemon.name.includes(filter)
  }
}
class PokemonListXState extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemons: [],
      filter: ''
    }
  }

  componentDidMount () {
    pokemonService
      .onTransition(state => {
        this.setState(state.context)
      })
  }
  render () {
    const { pokemons, filter } = this.state
    if (!filter) {
      return <PokemonList pokemons={pokemons} />
    }
    const filterFunction = filterPokemons(filter)
    const filteredPokemons = pokemons.filter(filterFunction)
    return <PokemonList pokemons={filteredPokemons} />
  }
}

export default PokemonListXState
