import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import { setSearchField, requestRobots } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  render() {
    console.log(this.props)
    const filteredRobots = this.props.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()); 
    });
    if(this.props.robots.length === 0) {
      return <h1 className="tc">Loading...</h1>
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={this.props.onSearchChange}/>
          <Scroll>
          <ErrorBoundry>
          <CardList robots={filteredRobots} />
          </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
    
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
