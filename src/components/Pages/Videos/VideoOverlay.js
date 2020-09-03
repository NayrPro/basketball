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
    
    const arrowsValues = [
        {
            key: 1,
            indexLimit : 0,
            condition1 : "fas fa-chevron-left arrow-transparent", 
            condition2 : "fas fa-chevron-left",
            nextIndex: (index-1)
        }, 
        {
            key: 2,
            indexLimit : props.videosData.length-1,
            condition1 : "fas fa-chevron-right arrow-transparent",
            condition2 : "fas fa-chevron-right",
            nextIndex: (index+1)
        }
    ]
    
    const arrows = arrowsValues.map(arrow => 
        <i 
            key={arrow.key}
            className={index === arrow.indexLimit ? arrow.condition1 : arrow.condition2}
            aria-hidden="true"
            onClick={() => {
                if(index === arrow.indexLimit){
                    return
                }
                changeVideo(arrow.nextIndex)
            }}
        ></i>
    )

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
                    {arrows}
                </div>
        </div>
    )
}
