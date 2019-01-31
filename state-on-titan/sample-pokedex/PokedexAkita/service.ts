import { PokedexStore, pokedexStore } from './state';
import { Pokemon } from './types'

export class PokedexService {
  constructor(private pokedexStore: PokedexStore) {}

  fetchPokemons () {
    fetch('http://localhost:3000/pokemons')
    .then(response => response.json())
    .then(pokemons => this.setPokemons(pokemons))
  }
  
  setPokemons(pokemons: Array<Pokemon>) {
    this.pokedexStore.update(state => ({
      pokemons
    }));
  }

  setFilter(filter: string) {
    this.pokedexStore.update(state => ({
      filter
    }));
  } 
}

export const pokedexService = new PokedexService(pokedexStore)

