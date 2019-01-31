import { ADD_POKEMONS } from '../types'

export default function PokemonReducer (state = [], action) {
  if (action.type === ADD_POKEMONS) {
    return [...state, ...action.payload.pokemons]
  }
  return state
}
