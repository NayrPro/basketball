import React from 'react'
import "./coursemodal.css"
// import {useSelector} from "react-redux"
import VideoContainer from './VideoContainer'
import VideoPlaylist from './VideoPlaylist'

export default function Course() {

    // const {elt} = useSelector(state => ({...state.coursesEltReducer}))

    return (
        <div className="course-videos">
            <VideoContainer/>
            <VideoPlaylist/>
        </div>
    )
}
