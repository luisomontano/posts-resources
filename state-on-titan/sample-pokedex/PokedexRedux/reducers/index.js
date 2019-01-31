import { combineReducers } from 'redux'
import pokemons from './pokemons'
import filter from './filter'

export default combineReducers({
  pokemons,
  filter
})
