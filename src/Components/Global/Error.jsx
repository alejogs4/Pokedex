import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ error }) => (
  <div className='error-container ubuntu'>
    <p>{error}</p>
  </div>
)

Error.propTypes = {
  error: PropTypes.string.isRequired
}

export default Error