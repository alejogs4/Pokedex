import React,{ useEffect } from 'react'
import './App.css'
import Routes from './Components/Routes'
import Header from './Components/Global/Header'
import { connect } from 'react-redux'
import { setUserData } from './redux/actionsCreators';

function App({ dispatchUser }) {

  useEffect(() => {
    if (localStorage.currentUser) dispatchUser(JSON.parse(localStorage.currentUser))
  }, [])

  return (
    <>
      <Header />
      <Routes />
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchUser(user) {
    dispatch(setUserData(user))
  }
})

export default connect(() => ({}), mapDispatchToProps)(App)
