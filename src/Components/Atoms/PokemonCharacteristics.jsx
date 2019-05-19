import React from 'react'

const PokemonCharacteristics = ({ pokemon }) => (
  <div className='pokemon-characteristics'>
    <article className='pokemon-data-card'>
      <h3 className='anton'>Characteristics</h3>
      <p className='ubuntu'><strong>Height: </strong>{pokemon.data.height}</p>
      <p className='ubuntu'><strong>Weight: </strong>{pokemon.data.weight}</p>
    </article>
    <article className='pokemon-data-card'>
      <h3 className='anton'>Moves</h3>
      <ul className='list'>
        {pokemon.data.moves.map(({ move }) => (
          <li key={move.name} className='ubuntu'>{move.name}</li>
        ))}
      </ul>
    </article>
  </div>
)

export default PokemonCharacteristics