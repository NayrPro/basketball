import React, {useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(props){
  // Depending on the window size some elements will change or not
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [display, setDisplay] = useState("none");
    const [background, setBackground] = useState("");
    const [color, setColor] = useState("#9d9393");

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
      (display === "none" && (e.target.id === "menu" || e.target.id === "menu-child")) ? setDisplay("block") : setDisplay("none");
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
            { windowWidth > 570 ? <Link to="/">BASKETBALL</Link> : <Link to="/" replace><i className="fas fa-basketball-ball"></i>B</Link>}
        </div>
          <div className="navbar-links">
            <React.Fragment>
            <Link className={"navbar-link home " + props.active["home"]} to="/" id="home" onClick={(e) => handleClick(e)} replace>
            { windowWidth > 768 ? "Home" : <i className="fas fa-home"></i>}
            </Link>

              <div 
                  className="navbar-link menu"
                  id="menu" 
                  onClick={(e) => handleClick(e)} 
                  style={{background: background}}>
              
                {windowWidth > 768 ? 
                <a 
                  href="/"
                  id="menu-child" 
                  onClick={(e) => e.preventDefault()}
                  style={{color: color}}>
                  Menu
                  <i id="menu-child" className={display === "block" ? "fas fa-caret-down" : "fas fa-caret-up"}></i>
                  </a> 
                  
                  : 
                
                <i 
                  className= "fa fa-bars"
                  id="menu-child"
                  style={{color: color}}>
                </i>
                }
                
                <div className="menu-list" style={{display: display}}>
                    <Link to="/courses" replace>Courses</Link><hr/>
                    <Link to="/students" replace>Students</Link><hr/>
                    <Link to="/videos" replace>Videos</Link><hr/>
                    <Link to="/News" replace>News</Link><hr/>
                    <Link to="/about" replace>About</Link>
                </div>

              </div>
              <Link to="/login" className={"navbar-link " + props.active["login"]} id="login" onClick={(e) => handleClick(e)} replace>
              { windowWidth > 768 ? "Login" : <i className="fa fa-user" ></i>}
              </Link>
            </React.Fragment>
          </div>
      </nav>
    )
}


