import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFormInputHandling from '../CustomHooks/useFormInputHandling'
import '../styles/login.css'
import '../styles/form.css'
import Error from '../Global/Error'
import { getPokemons } from '../../helpers/petitions'
import { connect } from 'react-redux'
import { setPokemons, setUserData } from '../../redux/actionsCreators';


function Login({ dispatchPokemons, dispatchUserData, history }) {
  const [loginError, setLoginError] = useState({ active: false, text: '' })
  const email = useFormInputHandling('')
  const password = useFormInputHandling('')

  async function login(e) {
    e.preventDefault()
    if (!localStorage.users) {
      return setLoginError({ active: true, text: 'User was not found' })
    }

    const users = JSON.parse(localStorage.users)
    const user = users.find(user => user.email === email.value && user.password === password.value)

    if (!user) {
      return setLoginError({ active: true, text: 'User was not found' })
    }
    // Clear error message, fetch pokemons and redirect to home
    setLoginError({ active: false, text: '' })
    const pokemons = await getPokemons()
    dispatchUserData(user)
    localStorage.setItem('currentUser', JSON.stringify(user))
    dispatchPokemons(pokemons)
    history.push('/pokemons/1')
  }

  return (
    <main className='form-container'>
      <form className='form ubuntu' onSubmit={login}>
        <h2 className='center ubuntu'>Login</h2>
        <label>
          Email
          <input className='form-input' type='email' name='email' {...email} required />
        </label>
        <label>
          Password
          <input className='form-input' type='password' name='password' {...password} required />
        </label>
        <div className='signup-link ubuntu'>
          <Link to='/signup'>
            Signup
          </Link>
        </div>
        <input className='button' type="submit" value="Login" />
        {loginError.active && <Error error={loginError.text} />}
      </form>
    </main>
  )
}

export const mapDispatchToProps = dispatch => ({
  dispatchPokemons(pokemons) {
    dispatch(setPokemons(pokemons))
  },
  dispatchUserData(user) {
    dispatch(setUserData(user))
  }
})

export default connect(() => ({}), mapDispatchToProps)(Login)