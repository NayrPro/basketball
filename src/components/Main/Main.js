import React from 'react'
import './Main.css'
export default function Main() {
    return (
        <div className="main">
            <h1 className="main-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, et!</h1>
            <div className="main-overlay">
                <img className="main-image" src={require('./image.jpg')} alt="main image"></img>
            </div>
            <div className="main-info">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repellat.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis quis asperiores, enim esse deleniti iste harum hic accusamus reprehenderit quaerat repellat optio laboriosam repellendus ab ipsam earum possimus. Labore quos quaerat at corporis esse! Asperiores, qui labore quia ratione tenetur obcaecati sint, accusamus excepturi quibusdam fuga deleniti nihil. Repellat?</p>
            </div>
        </div>
    )
}
