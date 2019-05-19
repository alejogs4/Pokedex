import React,{ useState } from 'react'
import withLogin from '../HOC/withLogin'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/actionsCreators'
import '../styles/login.css'
import '../styles/form.css'
import Error from '../Global/Error'
/**
 * Page to update user information
 */
function EditProfile({ user, updateUser, history }) {
  const [updateError, setUpdateError] = useState({ active: false, text: '' })
  /**
   * Handle user updaate profile
   */
  function editProfile(e) {
    e.preventDefault()

    const form = e.target
    const userData = {
      email: user.email,
      name: form.name.value,
      password: form.password.value,
      confirmationPassword: form.confirmationPassword.value
    }

    setUpdateError({ active: false, text: '' })
    if (userData.confirmationPassword !== userData.password) {
      return setUpdateError({ active: true, text: 'Passwords must match' })
    }

    updateUsersInLocalStorage(userData)
    updateUser(userData)
    localStorage.setItem('currentUser', JSON.stringify(userData))
    history.push('/pokemons/1')
  }
  /**
   * Find and update the value of the user in localstorage
   */
  function updateUsersInLocalStorage(user) {
    const users = localStorage.users ? JSON.parse(localStorage.users) : []
    const userIndex = users.findIndex(_user => _user.email === user.email)

    if (userIndex !== -1) {
      users[userIndex] = user
      localStorage.setItem('users', JSON.stringify(users))
    }
  }

  return (
    <main className='form-container'>
      <form className='form' onSubmit={editProfile}>
        <h2 className='center ubuntu'>Edit Profile</h2>
        <label>
          Name
          <input className='form-input' type='text' name='name' defaultValue={user && user.name} required />
        </label>
        <label>
          Password
          <input className='form-input' type='password' name='password' defaultValue={user && user.password} required />
        </label>
        <label>
          Confirmation Password
          <input className='form-input'
            type='password'
            name='confirmationPassword'
            defaultValue={user && user.confirmationPassword}
            required />
        </label>
        <input className='button' type="submit" value="Edit" />
        {updateError.active && <Error error={updateError.text} />}
      </form>
    </main>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  updateUser(user) {
    dispatch(setUserData(user))
  }
})

export default withLogin(connect(mapStateToProps, mapDispatchToProps)(EditProfile))