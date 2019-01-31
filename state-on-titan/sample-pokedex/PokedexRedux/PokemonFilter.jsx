import React, { Component } from 'react'
import { connect } from 'react-redux'
import PokemonFilter from '../components/PokemonFilter/index.jsx'
import { filterPokemons } from './actions'
class PokemonFilterRedux extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
  }

  handleChange (event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.filterPokemons(event.target.value)
  }
  render () {
    return (
      <PokemonFilter
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        value={this.props.value} />
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    filterPokemons: (filter) => {
      dispatch(filterPokemons(filter))
    }
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonFilterRedux)
