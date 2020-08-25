import React, {useState, useEffect} from 'react'
import "./courses.css"
import Navbar from '../../Navbar/Navbar'
import {Link} from "react-router-dom"

export default function Courses() {
    const [page, setPage] = useState(1)

    /* Will contain all the courses element */
    const [courses, setCourses] = useState()

    function coursesPush(page){
        var array = []
        var j = 15
        var k = j-1
        for(let i = ((page*j)-k); i<=(page*j); i++){
            array.push(
                <div className="course" key={i}>
                    <img src={require("./course1.jpg")} alt={`course ${i}`}/>
                    <div className="course-description">
                        <Link to={`/Courses/${i}`}>Course {i}</Link>
                        <hr/>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatem?</span>
                    </div>
                </div>
            )
        }
        setCourses(array)
    } 
    
    useEffect(() => {
        coursesPush(page)
    }, [page])

    function handleChange(e){
        const value = e.target.value
        value !== "" && setPage(value)
    }

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
                        <select name="pages" id="page-select" onChange={(e) => handleChange(e)}>
                            <option value="">-- Pages ---</option>
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
