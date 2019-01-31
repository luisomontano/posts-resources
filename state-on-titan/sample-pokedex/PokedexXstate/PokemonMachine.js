/* global fetch */
import { Machine, assign, interpret } from 'xstate'
function fetchPokemons () {
  return fetch('http://localhost:3000/pokemons')
    .then(response => response.json())
}
const pokemonMachineDescription = {
  id: 'pokemachine',
  context: {
    filter: '',
    pokemons: []
  },
  initial: 'start',
  states: {
    start: {
      invoke: {
        id: 'fectchPokemons',
        src: () => fetchPokemons(),
        onDone: {
          target: 'ready',
          actions: assign({ pokemons: (ctx, event) => event.data })
        }
      }
    },
    ready: {
      on: {
        CHANGE: {
          actions: assign({ filter: (ctx, event) => event.data })
        }
      }
    }
  }
}

export const pokemonMachine = Machine(pokemonMachineDescription)

export const pokemonService = interpret(pokemonMachine).start()
