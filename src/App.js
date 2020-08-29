import React, {useEffect, useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'
import './App.css';
import Home from './components/Home/Home'
import Courses from './components/Pages/Courses/Courses' 
import Students from './components/Pages/Students/Students'
import Videos from './components/Pages/Videos/Videos'
import News from './components/Pages/News/News'
import About from './components/Pages/About/About'
import Login from './components/Pages/Login/Login'
import ErrorPage from './components/Pages/ErrorPage/ErrorPage'
import Navbar from './Navbar/Navbar'
import {Route, Switch, useLocation} from 'react-router-dom'
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
  
  
  
  const [active, setActive] = useState({ home: "", login: ""})
  let location = useLocation()

  // Indicates the clicked navbar item that should be hilighted
  useEffect(() => {
    const pathname = location.pathname === "/" ? "home" : "login"
    const emptedValues = { home: "", login: ""}
    if(location.pathname === "/" || location.pathname === "/login"){
      setActive({
        ...emptedValues,
        [pathname] : "active"
      })
    }else{
      setActive({
        ...emptedValues
      })
    }
  }, [location])

  return (
      <div className="App">
        <Navbar active={active}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Courses" component={Courses}/>
          <Route exact path="/Students" component={Students}/>
          <Route exact path="/Videos" component={Videos}/>
          <Route exact path="/News" component={News}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Login" component={Login}/>
          <Route component={ErrorPage}/>
        </Switch>
      </div>
  );
}

export default App;
