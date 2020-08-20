import React from 'react'
import "./courses.css"
import Navbar from '../../Navbar/Navbar'

export default function Courses() {
    /* Will contain all the courses element */
    var courses = []

    function coursesPush(){
        for(let i = 0; i<45; i++){
            courses.push(
                <div className="course">
                    <img src={require("./course1.jpg")} alt={`course ${i+1}`}/>
                    <div className="course-description">
                        <a href="/">Course {i+1}</a>
                        <hr/>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem?</span>
                    </div>
                </div>
            )
        }
    } 
    
    coursesPush();

    return (
        <React.Fragment>
            <Navbar/>
            <div className="courses-container">
                <div className="courses-banner">
                    <div className="courses-banner overlay">
                        <h2>Courses</h2>
                    </div>
                </div>
                <div className="courses-pages">
                    <div className="courses-pages container">
                        <select name="pages" id="page-select">
                            <option value="">--Pages--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="courses-grid">
                    {courses}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
