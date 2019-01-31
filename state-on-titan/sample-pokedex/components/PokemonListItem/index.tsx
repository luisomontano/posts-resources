import * as React from 'react';
import Pokemon from '../Pokemon';

function PokemonListItem (props: any) {
  const { pokemon = {}, ...otherProperties } = props
  return (
    <li {...otherProperties}>
      <Pokemon {...pokemon} />
    </li>
  )
}

export default PokemonListItem

