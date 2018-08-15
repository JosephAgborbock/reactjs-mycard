import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path exact="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
