import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <h1 className="footer-title">Footer</h1>
            <div className="footer-lists">
                <ul>
                    <li> <a href="/">Lorem</a></li>
                    <li> <a href="/">Lorem</a></li>
                    <li> <a href="/">Lorem</a></li>
                </ul>
                <ul>
                    <li> <a href="/">Lorem</a></li>
                    <li> <a href="/">Lorem</a></li>
                    <li> <a href="/">Lorem</a></li>
                </ul>
                <ul>
                    <li> <a href="/">Lorem</a></li>
                    <li> <a href="/">Lorem</a></li>
                    <li> <a href="/">Lorem</a></li>
                </ul>
            </div>
            <div className="footer-social-medias">
                <div className="footer-social-medias-container">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                    <i className="fab fa-youtube" aria-hidden="true"></i>
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}
