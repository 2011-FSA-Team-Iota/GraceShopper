import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllUsers from './AllUsers'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const {isAdmin} = props.user
  return (
    <div>
      {isAdmin ? (
        <div className="profile">
          <h3>
            <FontAwesomeIcon icon={faUser} color="black" size="2x" />
            Welcome, Administrator
          </h3>

          <h4>Users</h4>
          <div>
            <AllUsers />
          </div>
        </div>
      ) : (
        <div className="profile">
          <h3>
            <FontAwesomeIcon icon={faUser} color="#04AAFF" size="2x" />
            Welcome, {email}
          </h3>
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
