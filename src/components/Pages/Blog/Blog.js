import React from 'react'
import "./blog.css"
import Navbar from '../../Navbar/Navbar'
export default function Blog() {
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
                    <div className="article">
                        <div className="article-image"></div>
                        <div className="article-description">
                            <div className="article-heading">
                                <a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                                <span>Jan 1, 2020 - 0 comments</span>
                            </div>
                            <hr/>
                            <div className="article-content">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore, cumque accusantium quibusdam natus velit aliquid voluptas eum tempora dignissimos error modi adipisci veritatis numquam reprehenderit dolorem placeat earum illum fugit nulla soluta totam sed aspernatur doloribus. Possimus, deserunt quod a alias impedit amet accusantium vel quibusdam! Doloribus consequatur in ad, ipsa iure accusamus eos quia unde eaque corporis repellendus tempore, libero deserunt illo dolorum! Et necessitatibus deserunt quo, earum delectus, quae minima perspiciatis nobis asperiores sequi optio, voluptas nemo. Accusamus nisi quisquam fuga distinctio adipisci exercitationem dolorem consectetur, ratione sequi aut voluptates magni temporibus similique nemo praesentium facere iste [...]</p>
                                <a href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </React.Fragment>
    )
}
