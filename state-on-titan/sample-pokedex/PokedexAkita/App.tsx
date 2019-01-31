import * as React from 'react'
import PokemonList from './PokemonList'
import PokemonFilter from './PokemonFilter'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <PokemonFilter />
        <PokemonList />
      </React.Fragment>
    )
  }
}

export default App
