import React from 'react'
import VideoPlayer from './VideoPlayer'
import VideoDescription from './VideoDescription'

export default function VideoContainer() {
    return (
        <div className="course-video-container">
                <VideoPlayer/>
                <VideoDescription/>
            </div>
    )
}
