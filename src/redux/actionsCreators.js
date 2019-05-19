import { SET_USER_DATA, SET_POKEMONS } from "./actions";
/**
 * Set of actionCreators that help us to dispatch data to redux store
 */
export const setUserData = (user) => ({
  type: SET_USER_DATA,
  user
})

export const setPokemons = pokemons => ({
  type: SET_POKEMONS,
  pokemons
})