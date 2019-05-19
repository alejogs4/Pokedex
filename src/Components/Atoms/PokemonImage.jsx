import React from 'react'

const PokemonImage = ({ name, pokemonId }) => (
  <img alt={name}
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} />
)

export default PokemonImage