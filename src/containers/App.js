import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainPage from '../components/MainPage';
import { setSearchField, requestRobots } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  render() {
    return (
      <MainPage {...this.props} />  
    )
    
  }
  
}

function mapStateToProps(state) {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
