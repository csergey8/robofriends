import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      return res.json()
    })
    .then(users => {
      this.setState({
        robots: users
      })
    })
  }

  
  render() {
    console.log(this.props)
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()); 
    });
    if(this.state.robots.length === 0) {
      return <h1 className="tc">Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
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
    searchField: state.searchField
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
