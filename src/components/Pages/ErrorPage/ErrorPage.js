import React from 'react'
import "./error.css"
import Navbar from '../../Navbar/Navbar'

export default function ErrorPage() {
    return (
        <div className="error-banner">
            <Navbar/>
            <div className="error-banner overlay">
                <div className="error-message">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
            </div>
	    </div>
    )
}
