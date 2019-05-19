import React, { useState } from 'react'
import useFormInputHandling from '../CustomHooks/useFormInputHandling'
import '../styles/login.css'
import '../styles/form.css'
import Error from '../Global/Error'
import { Link } from 'react-router-dom'
import useRegexValidation from '../CustomHooks/useRegexValidation'
/**
 * Signup page
 */
function Signup({ history }) {
  const [signupError, setSignupError] = useState({ active: false, text: '' })
  const name = useFormInputHandling('')
  const email = useFormInputHandling('')
  // State variables to represent user password
  const password = useRegexValidation(useFormInputHandling(''))
  const confirmationPassword = useRegexValidation(useFormInputHandling(''))

  function signupUser(e) {
    e.preventDefault()
    if (!password.isStrongEnough || !confirmationPassword.isStrongEnough) return

    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmationPassword: confirmationPassword.value
    }
    // If passwords doesn't match, we show an error
    if (userData.confirmationPassword !== userData.password) {
      return setSignupError({ active: true, text: 'Passwords must match' })
    }

    const localStorageData = localStorage.users ? JSON.parse(localStorage.users) : []
    const users = Array.isArray(localStorageData) ? localStorageData : []
    const existsUserAlready = users.some(user => user.email === userData.email)
    // Verify is the user alredy exists in our data
    if (existsUserAlready) {
      return setSignupError({ active: true, text: 'Email is already used' })
    }
    // Add new user in data and redirect to login
    users.push(userData)
    localStorage.setItem('users', JSON.stringify(users))
    history.push('/login')
  }

  return (
    <main className='form-container ubuntu'>
      <form className='form' onSubmit={signupUser}>
        <h2 className='center ubuntu'>Signup</h2>
        <label>
          Name
          <input type='text' className='form-input' {...name} required />
        </label>
        <label>
          Password
          <input className={`form-input ${!password.isStrongEnough && 'weak-password'}`}
            type='password'
            {...password}
            required />
        </label>
        <label>
          Confirmation Password
          <input className={`form-input ${!confirmationPassword.isStrongEnough && 'weak-password'}`}
            type='password'
            {...confirmationPassword}
            required />
        </label>
        <label>
          Email
          <input className='form-input' type='email' {...email} required />
        </label>
        <input className='button' type="submit" value="Signup" />
        <Link to='/login'>
          <button className='button'>Cancel</button>
        </Link>
        {(!password.isStrongEnough || !confirmationPassword.isStrongEnough) && <p className='bad-password ubuntu'>Password should have two uppercase letters, one special character, one number and have at least a length of 8</p>}
        {signupError.active && <Error error={signupError.text} />}
      </form>
    </main>
  )
}

export default Signup