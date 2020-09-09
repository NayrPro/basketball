import React, {useState, useEffect, useRef} from 'react'
import "./courses.css"
import Course from './CourseModal/Course'
import {useSelector, useDispatch} from "react-redux"

export default function Courses() {
    const [page, setPage] = useState(1)
    const {elt} = useSelector(state => ({...state.coursesEltReducer})) 
    const dispatch = useDispatch() 
    const ref = useRef()

    /* Will contain all the courses element */
    const [courses, setCourses] = useState()

    function goToCourse(number){
        dispatch({
            type:"ELT",
            payload: number
        })
    }

    function coursesPush(page){
        var array = []
        var j = 15
        var k = j-1
        for(let i = ((page*j)-k); i<=(page*j); i++){
            array.push(
                <div className="course" key={i}>
                    <img 
                        src={require("./course1.jpg")}
                        onClick={() => goToCourse(i)} 
                        alt={`course ${i}`}
                    />
                    <div className="course-description">
                        <a 
                           href="/"
                           onClick={(e) =>{ 
                             e.preventDefault() 
                             goToCourse(i)  
                        }}>
                            Course {i}
                        </a>
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
        window.scrollTo(0, 0);
        elt === 0 && ref.current.blur()
        // eslint-disable-next-line
    }, [page])

    function handleChange(e){
        const value = e.target.value
        value !== "" && setPage(value)
    }

    return (
        <React.Fragment>
            { elt === 0 ?
                <div className="courses-container">
                    <div className="courses-banner">
                        <div className="courses-banner overlay">
                            <h2>Courses</h2>
                        </div>
                    </div>
                    <div className="courses-pages">
                        <div className="courses-grid">
                            {courses}
                        </div>
                        <div className="courses-pages container">
                            <select name="pages" id="page-select" onChange={(e) => handleChange(e)} ref={ref}>
                                <option value="">Pages</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                </div> 
                :
                <Course/>
            }
        </React.Fragment>
    )
}
