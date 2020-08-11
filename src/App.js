import React from 'react';
import './App.css';
import Home from './components/Home'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

export default App;
