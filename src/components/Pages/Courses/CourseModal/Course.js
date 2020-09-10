import React from 'react'
import "./css/coursemodal.css"
import VideoContainer from './components/VideoContainer'
import VideoPlaylist from './components/VideoPlaylist'

export default function Course() {

    return (
        <div className="course-videos">
            <VideoContainer/>
            <VideoPlaylist/>
        </div>
    )
}
