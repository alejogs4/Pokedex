import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Pokemon from './Pages/Pokemon'
import EditProfile from './Pages/EditProfile'

const Routes = () => (
  <Switch>
    <Route exact path='/pokemons/:page' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/pokemon/:name' component={Pokemon} />
    <Route exact path='/edit' component={EditProfile} />
    <Route exact path='/' render={() => <Redirect to='/pokemons/1' />} />
  </Switch>
)

export default Routes