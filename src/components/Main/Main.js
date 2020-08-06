import React from 'react'
import './Main.css'
import './Main-sections.css'
export default function Main() {
    return (
        <div className="main">
            <h1 className="main-title">LOREM IPSUM DOLOR!</h1>
            <p className="main-title-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis quis asperiores, enim esse deleniti iste harum hic accusamus reprehenderit quaerat repellat optio laboriosam repellendus ab ipsam earum possimus. Labore quos quaerat at corporis esse! Asperiores.<span>Click Here!</span></p>
            <div className="main-overlay">
                <img className="main-image" src={require('./image.jpg')} alt="main"></img>
            </div>
            <div className="main-info">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repellat.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis quis asperiores, enim esse deleniti iste harum hic accusamus reprehenderit quaerat repellat optio laboriosam repellendus ab ipsam earum possimus. Labore quos quaerat at corporis esse! Asperiores, qui labore quia ratione tenetur obcaecati sint, accusamus excepturi quibusdam fuga deleniti nihil. Repellat?</p>
            </div>
            <div className="main-sections">
                <div class="main-sections-front" id="front">
                    <div class="main-section courses" id="courses"></div>
                    <div class="main-section students" id="students"></div>
                    <div class="main-section videos" id="videos"></div>
	                <div class="main-section blog" id="blog"></div>
                </div>
                <div class="main-sections-back" id="back">
                    <div class="main-section-info" id="info">
	                    <h3 id="info-title">Blabla</h3>
	                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit autem totam provident ullam reiciendis labore quaerat ad? Explicabo, eius provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit autem totam provident ullam reiciendis labore quaerat ad? Explicabo, eius provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit autem totam provident ullam reiciendis labore quaerat ad? Explicabo, eius provident.
	                    </p>
	                    <a href="/" id="info-link">Click here!</a>
                    </div>

                </div>
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
