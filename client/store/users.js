import axios from 'axios'

// ACTION TYPES
const GET_USERS = 'GET_USERS'

// ACTION CREATORS
function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}

// THUNK CREATORS
export function fetchUsers() {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(getUsers(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
