import React from 'react'
import Pokemon from '../Pokemon/index.jsx'
function PokemonListItem (props) {
  const { pokemon = {}, ...otherProperties } = props
  return (
    <li {...otherProperties}>
      <Pokemon {...pokemon} />
    </li>
  )
}

export default PokemonListItem
