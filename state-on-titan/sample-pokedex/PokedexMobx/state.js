/* global fetch */
import { observable, action } from 'mobx'

export const pokedex = observable({
  pokemons: [],
  filter: '',
  get filteredPokemons () {
    const filter = this.filter
    if (!filter) {
      return this.pokemons
    }
    return this.pokemons.filter(pokemon => pokemon.name.includes(filter))
  }
})

pokedex.addPokemons = action(function addPokemons (pokemons) {
  pokedex.pokemons = pokemons
})

pokedex.fetchPokemons = action(function fetchPokemons () {
  fetch('http://localhost:3000/pokemons')
    .then(response => response.json())
    .then(pokedex.addPokemons)
})

pokedex.setFilter = action(function setFilter (filter) {
  pokedex.filter = filter
})
