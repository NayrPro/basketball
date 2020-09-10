import React from 'react'
import {useSelector, useDispatch} from "react-redux"

export default function VideoPlayer() {

    const {elt} = useSelector(state => ({...state.coursesEltReducer}))

    const dispatch = useDispatch() 

    function cleanInputs(){
        dispatch({
            type:"USER",
            payload: "" 
        })
        dispatch({
            type:"CMT",
            payload: "" 
        })
    }

    return (
        <React.Fragment>

            <div className="quit-course-video">
                <i className="fas fa-times" 
                   aria-hidden="true"
                   onClick={() => {
                       dispatch({type:"QUIT"}) 
                       cleanInputs()
                    }}></i>
            </div>

            <div className="course-video-arrow"
                 style={{display: elt === 1? "block" : "flex"}}>
  	            
                <i className="fas fa-chevron-left" 
                   style={{display: elt === 1 ? "none" : "block"}}
                   onClick={()=>{
                            dispatch({type:"ELT", payload: elt-1})
                            dispatch({type:"DESCRIPTION"})
                            cleanInputs()
                    }}
                   aria-hidden="true">
                </i>

	            <i className="fas fa-chevron-right" 
                   style={{ display: elt === 45? "none" : "block",
                            float: elt === 1 && "right"}}
                   onClick={()=>{dispatch({type:"ELT", payload: elt+1})
                                 dispatch({type:"DESCRIPTION"})
                                 cleanInputs()
                            }}
                   aria-hidden="true">
                </i>

            </div>
                
                <video className="course-video" controls>
                    <source src="/" type="video/mp4"/>
                </video> 
                
        </React.Fragment>
    )
}
