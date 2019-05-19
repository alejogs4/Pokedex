import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPokemons } from '../../helpers/petitions'
import { mapDispatchToProps } from './Login'
import '../styles/pokemons.css'
import Pokemon from '../Atoms/Pokemon'
import useFormInputHandling from '../CustomHooks/useFormInputHandling'
import withLogin from '../HOC/withLogin'
import Pagination from '../Atoms/Pagination';

function Home({ dispatchPokemons, pokemons, match }) {
  const offset = Number(match.params.page - 1) * 50
  const search = useFormInputHandling('')

  useEffect(() => {
    getPokemonsToDisplay()
  }, [offset])

  async function getPokemonsToDisplay() {
    const pokemons = await getPokemons(offset)
    dispatchPokemons(pokemons)
  }

  function searchPokemon(pokemon) {
    const regex = new RegExp(search.value.trim(), 'i')
    return regex.test(pokemon.name)
  }

  return (
    <main>
      <h2 className='anton' style={{ textAlign: 'center' }}>Pokemons</h2>
      <input type='search' autoComplete="false" {...search} placeholder='Search Pokemon'/>
      <section className='pokemons'>
        {pokemons && pokemons.results && pokemons.results.filter(searchPokemon).map(pokemon => (
          <Pokemon key={pokemon.name}
            name={pokemon.name}
            pokemonId={pokemon.url.split('pokemon/')[1]} />
        ))}
      </section>
      {(pokemons && pokemons.count) && <Pagination total={pokemons.count} />}
    </main>
  )
}

const mapStateToProps = state => ({
  pokemons: state.pokemons
})

export default withLogin(connect(mapStateToProps, mapDispatchToProps)(Home))