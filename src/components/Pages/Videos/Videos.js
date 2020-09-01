import React from 'react'
import "./videos.css"
import videosData from './videosData'
import VideoOverlay from "./VideoOverlay"
import {useDispatch, useSelector} from "react-redux"

export default function Videos() {

    const dispatch = useDispatch()
    const {display} = useSelector(state => ({...state.videoReducer}))
    
    function videoModal(urlValue, keyValue){
        dispatch({
            type: "INDEX",
            payload: keyValue-1
        })
        dispatch({
            type: "AUTOPLAY",
            payload: ""
        })
        dispatch({
            type: "DISPLAY",
            payload: "block"
        })
        dispatch({
            type: "URL",
            payload: urlValue
        })
    }

    /* Stocks the title and the images of each
        video inside JSX elements */
    const videos = videosData.map(video => (
        <div className="video" key={video.key}>
                        <a 
                            href="/" 
                            className="video-thumbnail" 
                            onClick={(e) =>{
                                e.preventDefault()
                                videoModal(video.url, video.key)
                            }}
                        >
                            <img 
                                src= {require(`${video.urlImg}`)}
                                onMouseEnter={(e) => e.target.src = require(`${video.urlGif}`)}
                                onMouseLeave={(e) => e.target.src = require(`${video.urlImg}`)}
                                alt={video.key}/>
                            <i className="fas fa-play"></i>
                        </a>

                        <div 
                            className="video-description" onClick={(e) =>{
                                e.preventDefault()
                                videoModal(video.url, video.key)}}>
                            <a href="/">{video.title}</a>
                        </div>
        </div>
    ))
    


    return (
        <React.Fragment>

            <VideoOverlay videosData={videosData}/>
            
            <div className="courses-container" style={{opacity: display === "block" ? "0.5" : "1"}}>
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
