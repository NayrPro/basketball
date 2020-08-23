import React, {useEffect, useCallback} from 'react'
import {useDispatch} from 'react-redux'
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
import 'aos/dist/aos.css'
import AOS from 'aos'

function App() {

  /**  Keeping track of the size of the window for all pages  **/

  const dispatch = useDispatch()  
  
  const resize = useCallback( () => {
      dispatch({
        type: "RESIZE",
        payload: window.innerWidth
      })
  }, [dispatch])

  useEffect(() => {
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [resize])

  useEffect(() => {
    /*Initialisation of AOS in order to apply
    animations to some elements of the website
    when they're scrolled on*/
    AOS.init({
        duration : 1000
    });
    
  }, [])

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
