import React from 'react'

export default function Home() {
    return (
        <React.Fragment>
            <h1 className="main-title">LOREM IPSUM DOLOR!</h1>
            <p className="main-title-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis quis asperiores, enim esse deleniti iste harum hic accusamus reprehenderit quaerat repellat optio laboriosam repellendus ab ipsam earum possimus. Labore quos quaerat at corporis esse! Asperiores.<a href="/">Click Here!</a></p>
            <div className="main-overlay">
                <img className="main-image" src={require('../images/home.jpg')} alt="main"></img>
            </div>
        </React.Fragment>
    )
}
