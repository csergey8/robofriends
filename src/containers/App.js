import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
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

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }
  render() {
    console.log(this.state.robots)
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()); 
    });
    if(this.state.robots.length === 0) {
      return <h1 className="tc">Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
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

export default App;
