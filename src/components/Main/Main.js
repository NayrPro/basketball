import React from 'react'
import './Main.css'
export default function Main() {
    return (
        <div className="main">
            <h1 className="main-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, et!</h1>
            <div className="main-overlay">
                <img className="main-image" src={require('./image.jpg')} alt="main"></img>
            </div>
            <div className="main-info">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repellat.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis quis asperiores, enim esse deleniti iste harum hic accusamus reprehenderit quaerat repellat optio laboriosam repellendus ab ipsam earum possimus. Labore quos quaerat at corporis esse! Asperiores, qui labore quia ratione tenetur obcaecati sint, accusamus excepturi quibusdam fuga deleniti nihil. Repellat?</p>
            </div>
            <div className="main-sections">
                <div className="main-section courses"><img src={require("./images/field.jpg")} alt="field"/></div>
                <div className="main-section students"><img src={require("./images/shooting.jpg")} alt="shooting"/></div>
                <div className="main-section videos"><img src={require("./images/street_game.jpg")} alt="street game"/></div>
                <div className="main-section blog"><img src={require("./images/ball.jpg")} alt="ball"/></div>
            </div>
            <div className="main-form">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corrupti!</h2>
                <form action="" method="post">
                    <label  htmlFor="">Firstname: </label>
                    <input className="main-form-input text" type="text"/>
                    <label  htmlFor="">Lastname: </label>
                    <input className="main-form-input text" type="text"/>
                    <label  htmlFor="">E-mail: </label>
                    <input className="main-form-input email" type="email"/>
                    <label htmlFor="">Password: </label>
                    <input className="main-form-input password" type="password"/>
                    {/* <button className="main-form-input submit" type="submit">Submit</button> */}
                    <button className="main-form-input submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
