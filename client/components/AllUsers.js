import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/users'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

export class AllUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const {users} = this.props
    console.log(users)

    return (
      <div>
        {users.map(user => {
          return (
            <div
              key={user.id}
              style={{
                marginTop: 5,
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: 10
              }}
            >
              <div>
                <FontAwesomeIcon icon={faUser} color="#04AAFF" size="1x" />
                user {user.id}
              </div>
              <div>{user.email}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
    //   user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
