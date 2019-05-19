import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
// App reducers
import { pokemons } from './reducers/pokemons';
import { user } from './reducers/user';


export default createStore(combineReducers({
  pokemons,
  user
}), applyMiddleware(thunk, logger))