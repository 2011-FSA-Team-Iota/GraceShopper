import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/users'
import {Link} from 'react-router-dom'

export class AllUsers extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    //   const { isAdmin } = this.props.user
    const {users} = this.props
    console.log(users)

    return (
      <div>
        {users.map(user => {
          return (
            <span key={user.id}>
              <h3>{user.id}</h3>
              <h4>{user.email}</h4>
            </span>
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
