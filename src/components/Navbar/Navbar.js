import React from 'react'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav class="navbar">
        <div class="navbar-title">
            <a href="/">BASKETBALL</a>
        </div>
          <div class="navbar-links">
            <div class="navbar-link home">
              <a href="/">Home</a>
            </div>
            <div class="navbar-link menu">
                <a href="/">Menu</a>
                <div class="menu-list">
                    <a href="/">Courses</a>
                    <a href="/">Students</a>
                    <a href="/">Videos</a>
                    <a href="/">Blog</a>
                    <a href="/">About</a>
                </div>  
            </div>
            <div class="navbar-link">
                <a href="/">Login</a>
            </div>
          </div>
      </nav>
    )
}


