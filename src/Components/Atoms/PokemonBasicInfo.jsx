import React from 'react'
import PokemonImage from './PokemonImage';

const PokemonBasicInfo = ({ pokemon }) => (
  <div className='pokemon-data anton'>
    <h2>ID: {pokemon.data.id}</h2>
    <div>
      <PokemonImage name={pokemon.data.name} pokemonId={pokemon.data.id} />
    </div>
    <h2>{pokemon.data.name.toUpperCase()}</h2>
    <h3 className='anton'>Types</h3>
    <ul className='list flex center'>
      {pokemon.data.types.map(({ type }) => (
        <li key={type.name} className={`${type.name} type`}>{type.name}</li>
      ))}
    </ul>
  </div>
)

export default PokemonBasicInfo