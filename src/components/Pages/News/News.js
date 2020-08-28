import React from 'react'
import "./news.css"
import DataFetch from './Articles'

export default function News() {

return (
        <React.Fragment>
            <div className="news-container"> 
                <div className="news-banner">
                    <div className="news-banner overlay">
                        <h2>News</h2>
                    </div>
                </div>
                <div className="articles">
                    <DataFetch/>
                </div>
            </div>    
        </React.Fragment>
    )
}
