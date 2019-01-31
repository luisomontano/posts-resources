import { FILTER_POKEMONS } from '../types'

export default function FilterReducer (state = '', action) {
  if (action.type === FILTER_POKEMONS) {
    return action.payload.filter
  }
  return state
}
