import { API_URL } from "./constants";

export async function getPokemons(offset = 0) {
  const response = await fetch(`${API_URL}/pokemon?offset=${offset}&limit=50`)
  const pokemons = await response.json()

  return pokemons
}

export async function getPokemonByName(name) {
  const response = await fetch(`${API_URL}/pokemon/${name}`)
  const pokemon = await response.json()

  return pokemon
}