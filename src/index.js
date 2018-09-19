import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import 'tachyons';
import { searchRobots } from './reducers';
import { setSearchFild } from './actions';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
  );
registerServiceWorker();
