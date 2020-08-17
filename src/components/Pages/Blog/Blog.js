import React from 'react'
import "./blog.css"
import Navbar from '../../Navbar/Navbar'
export default function Blog() {
    return (
        <React.Fragment>
            <Navbar/>
            <div class="blog-banner">
                <div class="blog-banner overlay">
                    <h2>Blog</h2>
                </div>
            </div>
            <div class="articles">
                <div class="article">
                    <div class="article-image"></div>
                    <div class="article-description">
                        <div class="article-heading">
    	                    <a href="/">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                            <span>Jan 1, 2020 - 0 comments</span>
                        </div>
                        <hr/>
                        <div class="article-content">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dolore, cumque accusantium quibusdam natus velit aliquid voluptas eum tempora dignissimos error modi adipisci veritatis numquam reprehenderit dolorem placeat earum illum fugit nulla soluta totam sed aspernatur doloribus. Possimus, deserunt quod a alias impedit amet accusantium vel quibusdam! Doloribus consequatur in ad, ipsa iure accusamus eos quia unde eaque corporis repellendus tempore, libero deserunt illo dolorum! Et necessitatibus deserunt quo, earum delectus, quae minima perspiciatis nobis asperiores sequi optio, voluptas nemo. Accusamus nisi quisquam fuga distinctio adipisci exercitationem dolorem consectetur, ratione sequi aut voluptates magni temporibus similique nemo praesentium facere iste [...]</p>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
