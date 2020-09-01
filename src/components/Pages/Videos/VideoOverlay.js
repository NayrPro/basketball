import React from 'react'
import {useSelector, useDispatch} from "react-redux"

export default function VideoOverlay(props) {

    const {display, url, autoplay, index} = useSelector(state => ({...state.videoReducer}))
    const dispatch = useDispatch()

    function changeVideo(nextIndex){
        dispatch({
            type: "URL",
            payload: props.videosData[nextIndex].url
        })
        dispatch({
            type: "INDEX",
            payload: nextIndex
        })
    }

    function quitVideo(){
        dispatch({
            type: "DISPLAY",
            payload: "none"
        })
        dispatch({
            type: "AUTOPLAY",
            payload: "?autoplay=0"
        })
    }
    
    return (
        <div className="video-overlay" style={{display: display}}>
                <i 
                    className="fas fa-times" 
                    onClick={() => {
                        quitVideo()
                    }}
                ></i>
                <iframe 
                    title="video" 
                    width="800" 
                    height="506" 
                    src={"https://www.youtube.com/embed/"+url+autoplay} 
                    frameBorder="0" 
                    allowFullScreen={true}
                >
                </iframe>
                <div className="chevron">
                    <i 
                        className={index <= 0 ? "fas fa-chevron-left arrow-transparent" : "fas fa-chevron-left"} 
                        aria-hidden="true"
                        onClick={() => {
                            if(index > 0){
                                changeVideo(index-1)
                            }
                        }}
                    ></i>
                    <i 
                        className={index < props.videosData.length-1 ? "fas fa-chevron-right" : "fas fa-chevron-right arrow-transparent"}
                         aria-hidden="true"
                         onClick={() => {
                            if(index < props.videosData.length-1){ 
                                changeVideo(index+1)
                            }
                        }}
                    ></i>
                </div>
        </div>
    )
}
