import { Pokemon } from './types'
import { PokedexState, PokedexStore, pokedexStore } from './state'
import { Query } from '@datorama/akita';

export class AppQuery extends Query<PokedexState> {
  filteredPokemons$ = this.select(state => {
    if (!state.filter){
      return state.pokemons
    }
    return state.pokemons.filter(pokemon => pokemon.name.includes(state.filter))
  });

  filter = this.select( state => state.filter )


  constructor(protected store: PokedexStore) {
    super(store);
  }
}

export const appQuery = new AppQuery(pokedexStore)