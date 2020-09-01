import React, {useState} from 'react'
import "./videos.css"
import videosData from './videosData'

export default function Videos() {

    /* To show or hide the specific video clicked on */
    
    const [display, setDisplay] = useState("none")
    const [url, setUrl] = useState("")
    const [autoplay, setAutoplay] = useState("") // Pauses the video when you quit it
    const [index, setIndex] = useState(0) // Allows us to get access to a video based on his index in videosData
    
    function videoModal(urlValue, keyValue){
        setIndex(keyValue-1)
        setAutoplay("")
        setDisplay("block") 
        setUrl(urlValue)
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
            <div className="video-overlay" style={{display: display}}>
                <i 
                    className="fas fa-times" 
                    onClick={() => {
                        setDisplay("none")
                        setAutoplay("?autoplay=0")
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
                                setUrl(videosData[index-1].url) 
                                setIndex(index-1)
                            }
                        }}
                    ></i>
                    <i 
                        className={index < videosData.length-1 ? "fas fa-chevron-right" : "fas fa-chevron-right arrow-transparent"}
                         aria-hidden="true"
                         onClick={() => {
                            if(index < videosData.length-1){ 
                                setUrl(videosData[index+1].url)
                                setIndex(index+1)
                            }
                        }}
                    ></i>
                </div>
            </div>
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
