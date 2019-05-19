import React,{ Component } from 'react'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
/**
 * Component to handle required login in private routes
 */
function withLogin(WrappedComponent) {
  return class extends Component {
    
    componentDidMount() {
      // Using a server here we could verify user token
      if (!localStorage.currentUser) {
        return this.props.history.push('/login')
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const withLoginAndRouter = compose(
  withRouter,
  withLogin
)

export default withLoginAndRouter