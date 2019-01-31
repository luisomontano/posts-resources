import React, { Component } from 'react'
import PokemonList from './PokemonList.jsx'
import PokemonFilter from './PokemonFilter.jsx'

class App extends Component {
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
