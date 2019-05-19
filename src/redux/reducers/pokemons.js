import { SET_POKEMONS } from "../actions";

export const pokemons = (state = {}, action) => {
  switch(action.type) {
    case SET_POKEMONS:
      return action.pokemons
    default:
      return state
  }
}