import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAIL } from './constants';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text
  }
}

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: json }))
  .catch(err => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: err }));
}