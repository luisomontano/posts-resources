import React from 'react'
import PokemonListItem from '../PokemonListItem/index.jsx'

function PokemonList (props) {
  const { pokemons = [] } = props
  return (
    <ul>
      { pokemons.map(pokemon => <PokemonListItem key={pokemon.id} pokemon={pokemon} />)}
    </ul>
  )
}

export default PokemonList
