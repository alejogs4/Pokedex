import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/actionsCreators';
/**
 * Main header of the application
 */
const Header = ({ user, logout }) => (
  <header className='main-header'>
    <Link to={user ? '/pokemons/1' : '/login'}>
      <h1 className='anton'>Pokedex</h1>
    </Link>
    {user && (
      <div className='menu-actions'>
        <Link to='/edit'>
          Edit Profile
        </Link>
        <Link to='/login' onClick={logout}>
          Logout
        </Link>
      </div>
    )}
  </header>
)

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  logout() {
    localStorage.removeItem('currentUser')
    dispatch(setUserData(null))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)