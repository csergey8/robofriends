import React, { Component } from 'react'

export default class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    return (
      <div>
      <h1 className="f1">Robofriends</h1>
      </div>
    )
  }
}
