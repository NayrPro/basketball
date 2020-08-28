import React from 'react'
import "./videos.css"
import videosData from './videosData'

export default function Videos() {

    /* Stocks the title and the images of each
        video inside JSX elements */
    const videos = videosData.map(video => (
        <div className="video" key={video.key}>
                        <a href="/" className="video-thumbnail">
                        <img 
                        src= {require(`${video.urlImg}`)}
                        onMouseEnter={(e) => e.target.src = require(`${video.urlGif}`)}
                        onMouseLeave={(e) => e.target.src = require(`${video.urlImg}`)}
                         alt={video.key}/>
                        <i className="fas fa-play"></i>
                        </a>
                        <div className="video-description">
                            <a href="/">{video.title}</a>
                        </div>
        </div>
    ))
    return (
        <React.Fragment>
            <div className="courses-container">
                <div className="videos-banner">
                    <div className="videos-banner overlay">
                        <h2>Videos</h2>
                    </div>
                </div>
                <div className="videos-grid">
                    {/*Displaying each video's infos*/}
                    {videos} 
                </div>
            </div>
        </React.Fragment>
    )
}
