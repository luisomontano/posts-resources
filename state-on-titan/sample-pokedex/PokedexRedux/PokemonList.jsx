import React, { Component } from 'react'
import { connect } from 'react-redux'
import PokemonList from '../components/PokemonList/index.jsx'
import { fetchPokemons } from './actions'

function filterPokemons (filter) {
  return function filterClosure (pokemon) {
    return pokemon.name.includes(filter)
  }
}
class PokemonListRedux extends Component {
  componentDidMount () {
    this.props.fetchPokemons()
  }
  render () {
    if (!this.props.filter) {
      return (<PokemonList pokemons={this.props.pokemons} />)
    }
    const filter = filterPokemons(this.props.filter)
    const pokemons = this.props.pokemons.filter(filter)
    return (<PokemonList pokemons={pokemons} />)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => {
      dispatch(fetchPokemons())
    }
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons,
    filter: state.filter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListRedux)
