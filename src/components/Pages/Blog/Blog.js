import React from 'react'
import "./blog.css"
import Navbar from '../../Navbar/Navbar'
import blogData from "./blogData"

export default function Blog() {
    const articles = blogData.map(article => (
        <React.Fragment key={article.key}>
            <div className="article">
                <div className="article-image"
                     style={{backgroundImage: `url(${require(`${article.url}`)})`}}>
                </div>
                <div className="article-description">
                    <div className="article-heading">
                        <a href="/">{article.title}</a>
                        <span>Jan 1, 2020 - 0 comments</span>
                    </div>
                    <hr/>
                    <div className="article-content">
                        <p>{article.paragraph} [...]</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ))
    return (
        <React.Fragment>
            <Navbar/>
            <div className="blog-container">
                <div className="blog-banner">
                    <div className="blog-banner overlay">
                        <h2>Blog</h2>
                    </div>
                </div>
                <div className="articles">
                    {articles}
                </div>
            </div>    
        </React.Fragment>
    )
}
