import React from 'react'
import VideoPlayer from './videoContainer/VideoPlayer'
import VideoDescription from './videoContainer/VideoDescription'

export default function VideoContainer() {
    return (
        <div className="course-video-container">
                <VideoPlayer/>
                <VideoDescription/>
            </div>
    )
}
