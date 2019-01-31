import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { pokedex } from './state'
import PokemonList from '../components/PokemonList/index.jsx'

@observer
class PokeListMobX extends Component {
  componentDidMount () {
    pokedex.fetchPokemons()
  }
  render() {
    return (
      <PokemonList pokemons={pokedex.filteredPokemons}/>    
    )
  }
}

export default PokeListMobX

