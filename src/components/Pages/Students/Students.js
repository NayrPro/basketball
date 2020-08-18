import React from 'react'
import "./students.css"
import Navbar from '../../Navbar/Navbar'

export default function Students() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="students-container">
                <div className="students-banner">
                    <div className="students-banner overlay">
                        <h2>Students Feedback</h2>
                    </div>
                </div>
                <div className="students-feedback">
                    <div className="student-feedback">
                        <i className="fas fa-quote-left"></i>
                        <img src={require("./images/lorem1.jpg")}  alt="lorem1"/>
                        <p> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque aliquid, odio ipsum eligendi distinctio ut, pariatur esse fugiat ad sequi quisquam quas iusto? Animi modi explicabo, error velit aspernatur similique quidem aut illo voluptas sit ipsam eius repudiandae atque rerum, molestias architecto autem asperiores harum tenetur itaque. Pariatur, veniam!"</p>
                        <span>- Lorem1 -</span>
                    </div>
                    <hr/>   
                </div>
            </div>
        </React.Fragment>
    )
}
