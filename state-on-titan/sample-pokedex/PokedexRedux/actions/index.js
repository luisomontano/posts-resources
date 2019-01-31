import {
  ADD_POKEMONS,
  FILTER_POKEMONS,
  FETCH_POKEMONS
} from '../types'

export function addPokemons (pokemons) {
  return {
    type: ADD_POKEMONS,
    payload: {
      pokemons
    }
  }
}

export function fetchPokemons () {
  return {
    type: FETCH_POKEMONS
  }
}

export function filterPokemons (filter) {
  return {
    type: FILTER_POKEMONS,
    payload: {
      filter
    }
  }
}
