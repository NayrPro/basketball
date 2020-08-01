import React from 'react'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar">
        <div className="navbar-title">
            <a href="/">BASKETBALL</a>
        </div>
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Students</a></li>
            <li><a href="/">Videos</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Login</a></li>
          </ul>
      </nav>   
    )
}