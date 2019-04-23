import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './user-home.css'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {username} = props
  if (username) {
    return (
      <div>
        <h3>Welcome, {username}</h3>
      </div>
    )
  } else {
    return <div id="hello">Hello there!</div>
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    username: state.user.username
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  // email: PropTypes.string
  username: PropTypes.string
}
