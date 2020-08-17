import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(){
  // Depending on the window size some elements will change or not
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [display, setDisplay] = useState("none");
    const [background, setBackground] = useState("");
    const [color, setColor] = useState("#9d9393");

    /** Should this event be in a reducer??? */
    useEffect(() => {
      function resize(){
        setWindowWidth(window.innerWidth)
      }
        window.addEventListener("resize", resize)
        return () =>  window.removeEventListener("resize", resize)
      }, [])
    
    useEffect(() => {
      setWindowWidth(window.innerWidth)
    }, [windowWidth])

    // The dropdown list of the "menu-list" block is either shown or not 
    function handleClick(e){
      display === "block" ? setDisplay("none") : setDisplay("block");
    }
          
    // The style of "navbar-link menu" will change depending on the value of display
    useEffect(() => {
      if(display === "block"){
        setBackground("#4b4848") 
        setColor("#f1f1f1")
      }else{
        setBackground("")
        setColor("#9d9393")
      }
    }, [display])

    return(
        <nav className="navbar">
        <div className="navbar-title">
            <a href="/">BASKETBALL</a>
        </div>
          <div className="navbar-links">
            <React.Fragment>
            <Link className="navbar-link home" to="/">
            { windowWidth > 768 ? "Home" : <i className="fas fa-home"></i>}
            </Link>

              <div 
                  className="navbar-link menu" 
                  onClick={handleClick} 
                  style={{background: background}}>
              
                {windowWidth > 768 ? 
                <a 
                  href="/" 
                  onClick={(e) => e.preventDefault()}
                  style={{color: color}}>
                  Menu
                  <i className={display === "block" ? "fas fa-caret-down" : "fas fa-caret-up"}></i>
                  </a> 
                  
                  : 
                
                <a 
                  href="/" 
                  onClick={(e) => e.preventDefault()}>
                    <i className="fa fa-bars" style={{color: color}}></i>
                </a>
                }
                
                <div className="menu-list" style={{display: display}}>
                    <Link to="/courses">Courses</Link><hr/>
                    <Link to="/students">Students</Link><hr/>
                    <Link to="/videos">Videos</Link><hr/>
                    <Link to="/blog">Blog</Link><hr/>
                    <Link to="/about">About</Link>
                </div>

              </div>
              <Link to="/login" className="navbar-link">
              { windowWidth > 768 ? "Login" : <i className="fa fa-user" ></i>}
              </Link>
            </React.Fragment>
          </div>
      </nav>
    )
}


