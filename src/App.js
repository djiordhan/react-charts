import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/menu';
import ChartsPage from './components/chart';

class App extends Component {
  render() {

    return (
      <Router>
        <div className='container'>
          <Menu/>
            <div className='chart'>
            <Route exact={true} path='/'  render={() => (
              <h1>Please select a chart type to continue.</h1>
            )}/>
            <Route path='/chart/:chartType' render={({match}) => (
                <ChartsPage chartType={match.params.chartType}/>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
