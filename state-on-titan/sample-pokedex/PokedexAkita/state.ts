import { Store, StoreConfig } from '@datorama/akita'
import { Pokemon } from './types'

export interface PokedexState {
  pokemons: Array<Pokemon>,
  filter: string
}

export function createInitialState(): PokedexState {
  return {
    pokemons: [],
    filter: ''
  }
}

@StoreConfig({ name: 'pokemons' })
export class PokedexStore extends Store<PokedexState> {
  constructor() {
    super(createInitialState())
  }
}

export const pokedexStore = new PokedexStore();
