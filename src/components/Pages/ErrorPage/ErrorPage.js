import React from 'react'
import "./error.css"
import Navbar from '../../Navbar/Navbar'

export default function ErrorPage() {
    return (
        <div class="error-banner">
            <Navbar/>
            <div class="error-banner overlay">
                <div class="error-message">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
            </div>
	    </div>
    )
}
