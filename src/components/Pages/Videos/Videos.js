import React from 'react'
import "./videos.css"
import Navbar from '../../Navbar/Navbar'

export default function Videos() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="courses-container">
                <div className="videos-banner">
                    <div className="videos-banner overlay">
                        <h2>Videos</h2>
                    </div>
                </div>
                <div className="videos-grid">
                    <div className="video">
                        <a href="/" className="video-thumbnail">
                        <i className="fas fa-play"></i>
                        </a>
                        <div className="video-description">
                            <a href="/">Lorem ipsum dolor sit amet consectetur.</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
