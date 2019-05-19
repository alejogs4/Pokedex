import React, { useEffect, useState } from 'react'
import { getPokemonByName } from '../../helpers/petitions'
import Error from '../Global/Error'
import PokemonBasicInfo from '../Atoms/PokemonBasicInfo'
import PokemonCharacteristics from '../Atoms/PokemonCharacteristics'
import withLogin from '../HOC/withLogin'
/**
 * Page to represent pokemon
 */
function Pokemon({ match }) {
  const [pokemon, setPokemon] = useState({ loading: false, error: null, data: null })
  /**
   * Get prokemon data
   */
  function fecthPokemon() {
    const { name } = match.params
    setPokemon({ loading: true, error: null, data: null })

    getPokemonByName(name)
      .then(data => setPokemon({ loading: false, error: null, data }))
      .catch(error => setPokemon({ loading: false, error, data: null }))
  }

  useEffect(() => {
    fecthPokemon()
  }, [])

  return (
    <main className='pokemon-container'>
      {pokemon.loading && <p>Loading your pokemon...</p>}
      {pokemon.error && <Error error={pokemon.error.message} />}
      {pokemon.data && (
        <section className='pokemon-data-container'>
          <PokemonBasicInfo pokemon={pokemon} />
          <PokemonCharacteristics pokemon={pokemon} />
        </section>
      )}
    </main>
  )
}

export default withLogin(Pokemon)