import React, { Component } from 'react';
import './MainPage.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  filterRobots = (robots) => {
    return this.props.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })}
  render() {
    const { robots, isPending } = this.props;
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={this.props.onSearchChange}/>
          <Scroll>
          { isPending ? <h1>Loading</h1> 
            : <ErrorBoundry>
                <CardList robots={this.filterRobots(robots)} />
              </ErrorBoundry>
          }
          </Scroll>
        </div>
      )
    
  }
  
}



export default MainPage;