import React from 'react'
import CustomHookRequest from '../hooks/CustomHookRequest'
export default function PokemonList () {
  const state = CustomHookRequest('http://pokemons')
  if (!state) {
    return (<p>Loading</p>)
  }
  const { elements } = state.context
  const pokemons = elements.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)
  return (<ul>{pokemons}</ul>)
}
