import React from 'react'
import { Link } from 'react-router-dom'
import PokemonImage from './PokemonImage'
import PropTypes from 'prop-types'

const Pokemon = ({ name, pokemonId })  => (
  <Link to={`/pokemon/${name}`} className='card'>
    <article>
      <div className='pokemon-img'>
        <PokemonImage name={name} pokemonId={pokemonId.replace('/', '')} />
      </div>
      <p className='anton'>
        {name}
      </p>
    </article>
  </Link>
)

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  pokemonId: PropTypes.string.isRequired
}

export default Pokemon