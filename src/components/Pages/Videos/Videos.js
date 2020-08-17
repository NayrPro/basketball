import React from 'react'
import "./videos.css"
import Navbar from '../../Navbar/Navbar'

export default function Videos() {
    return (
        <React.Fragment>
            <Navbar/>
            <div class="videos-banner">
                <div class="videos-banner overlay">
                    <h2>Videos</h2>
                </div>
            </div>
            <div class="videos-grid">
                <div class="video">
                    <a href="/" class="video-thumbnail">
                    <i class="fas fa-play"></i>
                    </a>
                    <div class="video-description">
                        <a href="/">Lorem ipsum dolor sit amet consectetur.</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
