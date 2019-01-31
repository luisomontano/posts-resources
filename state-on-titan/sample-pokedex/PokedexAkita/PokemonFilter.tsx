import * as React from 'react'
import { appQuery } from './query'
import { pokedexService } from './service'
import PokemonFilter from '../components/PokemonFilter';

class PokemonFilterAkita extends React.Component {
  state:  { filter: string; } = { filter: ''};

  constructor (props: any) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit (event: any) {
    event.preventDefault()
    event.stopPropagation()
  }

  handleChange (event: any) {
    event.preventDefault()
    event.stopPropagation()
    pokedexService.setFilter(event.target.value)
  }

  suscribeToData () {
    appQuery.filter
      .subscribe(filter => {
        this.setState({ filter })
      });
  }

  componentDidMount() {
    this.suscribeToData()
  }
  render () {
    return (
      <PokemonFilter
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        filter={this.state.filter}
      />
    )
  }
}

export default PokemonFilterAkita
