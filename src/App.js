import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu';

import Activity from './components/activity';
import Usage from './components/usage';
import Volume from './components/volume';

class App extends Component {
  render() {

    return (
      <Router>
        <div className='container'>
          <Menu />
          <div className='chart'>
            <Route exact={true} path='/' render={() => (
              <h1>Please select a chart type to continue.</h1>
            )} />
            <Route path='/chart/activity' render={({ match }) => (
              <Activity />
            )} />
            <Route path='/chart/usage' render={({ match }) => (
              <Usage />
            )} />
            <Route path='/chart/volume' render={({ match }) => (
              <Volume />
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
