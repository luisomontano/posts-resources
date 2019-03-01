import { Machine, assign, interpret } from 'xstate'
import { useState, useEffect } from 'react'

const pokemons = [
  {
    name: 'Bulbasaur'
  },
  {
    name: 'Squirtle'
  },
  {
    name: 'Charmander'
  }
]
function makeRequest (url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pokemons)
    }, 3000)
  })
}

function createConfig (url) {
  return {
    id: 'requestmachine',
    context: {
      elements: []
    },
    initial: 'start',
    states: {
      start: {
        invoke: {
          id: 'invokefetch',
          src: () => makeRequest(url),
          onDone: {
            target: 'ready',
            actions: assign({ elements: (ctx, event) => event.data })
          }
        }
      },
      ready: {
      }
    }
  }
}

export default function CustomHookRequest (url) {
  const [state, setupState] = useState(null)

  useEffect(() => {
    if (url) {
      const pokemonMachine = Machine(createConfig(url))
      const service = interpret(pokemonMachine).start()
      service.onTransition((state) => setupState(state))
    }
  }, [url])

  return state
}
