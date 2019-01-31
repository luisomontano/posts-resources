import * as React from 'react'
import PokemonListItem from '../PokemonListItem'

function PokemonList (props: any) {
  const { pokemons = [] } = props
  return (
    <ul>
      { 
        pokemons.map(
          (pokemon: any) => <PokemonListItem key={pokemon.id} pokemon={pokemon} />
        )
      }
    </ul>
  )
}

export default PokemonList