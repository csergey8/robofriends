import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAIL } from './constants';


const initialStateSearch = {
  searchField: ''
}

const initialStateRequest = {
  isPending: false,
  robots: [],
  error: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch(action.type) {
      case CHANGE_SEARCHFIELD: 
        return {...state, searchField: action.payload }
      default: 
        return state;
    }
}

export const requestRobots = (state = initialStateRequest, action = {}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {...state, isPending: true}
    case REQUEST_ROBOTS_SUCCESS:
      return {...state, isPending: false, robots: action.payload}
    case REQUEST_ROBOTS_FAIL: 
      return {...state, isPending: false, error: action.payload}
    default:
      return state;
  }
}