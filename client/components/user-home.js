import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllUsers from './AllUsers'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const {isAdmin} = props.user
  return (
    <div>
      {isAdmin ? (
        <div>
          <h3>Welcome, Administrator</h3>
          <h2>User Information</h2>
          <div>
            <AllUsers />
          </div>
        </div>
      ) : (
        <div>
          <h3>Welcome, {email}</h3>
        </div>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
