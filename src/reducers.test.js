import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAIL } from './constants';

import * as reducers from './reducers';
import { isTaggedTemplateExpression } from 'babel-types';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })
});


describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
  }
  
  it('should return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING})).toEqual({
        robots: [],
        isPending: true,
        error: ''
      })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS, 
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }]})).toEqual({
        robots: [{
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }],
        isPending: false,
        error: ''
      })
  })

  it('should handle REQUEST_ROBOTS_FAIL', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAIL, 
      payload: 'error'})).toEqual({
        robots: [],
        isPending: false,
        error: 'error'
      })
  })
})