import React from 'react';
import './App.css';
import Home from './components/Home'
import Courses from './components/Pages/Courses/Courses' 
import Students from './components/Pages/Students/Students'
import Videos from './components/Pages/Videos/Videos'
import Blog from './components/Pages/Blog/Blog'
import About from './components/Pages/About/About'
import Login from './components/Pages/Login/Login'
import ErrorPage from './components/Pages/ErrorPage/ErrorPage'

import {HashRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Courses" component={Courses}/>
          <Route exact path="/Students" component={Students}/>
          <Route exact path="/Videos" component={Videos}/>
          <Route exact path="/Blog" component={Blog}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Login" component={Login}/>
          <Route component={ErrorPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
