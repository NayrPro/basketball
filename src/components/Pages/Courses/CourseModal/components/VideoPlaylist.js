import React, {useState,useEffect, useRef} from 'react'
import {useSelector, useDispatch} from "react-redux"

export default function VideoPlaylist() {
    
    const {elt} = useSelector(state => ({...state.coursesEltReducer}))
    
    const [coursesCompleted, setCoursesCompleted] = useState(0)
    
    const ref = useRef()
    
    const dispatch = useDispatch() 

    useEffect(()=>{
        ref.current.scrollIntoView()
    }, [elt])

    function validateCourse(e){
        e.stopPropagation()
        e.target.checked === true ? setCoursesCompleted(coursesCompleted+1) : setCoursesCompleted(coursesCompleted-1)
    }

    function courses(){
        var array = []
        for(let i = 1; i<=45; i++){
            array.push(
            <div
                key={i}
                ref={i === elt ? ref : null}
                className="courses-list-elmt" 
                style={{backgroundColor: i === elt && "orange"}}
                onClick={() => {
                    dispatch({
                        type: "ELT",
                        payload: i
                    })
                    dispatch({
                        type: "DESCRIPTION"
                    })
                }}
            >
                <input type="checkbox" onClick={(e) => validateCourse(e)}/>
                <div>
                    <span>Course {i}</span><br/>
                    {
                        elt === i ?
                        <i className="fas fa-play-circle"></i>
                        :
                        <i className="far fa-play-circle"></i>
                    }
                    <span style={{fontStyle: "italic"}}>0 min</span>
                </div>
            </div>)
        }
        return array
    }

    return (
        <div className="courses-list-container">
                <div className="courses-list-header">
                    <div>
	                    <p>Courses Playlist</p>
	                    <span>{coursesCompleted}/45</span>
                    </div>
                </div>
                {courses()}
        </div>
    )
}
