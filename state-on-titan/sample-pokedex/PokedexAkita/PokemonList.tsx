import * as React from 'react'
import { appQuery } from './query'
import { pokedexService } from './service'
import  PokeList from '../components/PokemonList'
import { Pokemon } from './types'

class PokemonListAkita extends React.Component {
  state:  { pokemons: Pokemon[]; } = { pokemons: []};
  
  constructor(props: any) {
    super(props);
  }

  suscribeToData () {
    appQuery.filteredPokemons$
      .subscribe(pokemons => {
        this.setState({ pokemons })
      });
  }

  componentDidMount() {
    this.suscribeToData()
    pokedexService.fetchPokemons()
  }
  render () {
    
    return (
      <PokeList pokemons={this.state.pokemons} />
    )
  }
}

export default PokemonListAkita
