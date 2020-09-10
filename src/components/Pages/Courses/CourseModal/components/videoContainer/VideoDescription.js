import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import CommentSection from './CommentSection'

export default function VideoDescription() {
    const {elt} = useSelector(state => ({...state.coursesEltReducer}))
    const {option} = useSelector(state => ({...state.videoOptionsReducer})) 
    const {validate} = useSelector(state => ({...state.commentsReducer}))

    const dispatch = useDispatch() 
    
    useEffect(() => {
        validate === "on" && setTimeout(() => {
            dispatch({type:"VALIDATE", payload: ""})  
        }, 700);
        // eslint-disable-next-line
    }, [validate])


    return (
        <div className="course-video-description">

            <div className={"comment-validated "+validate}>Your comment has been sent!</div>

            <div className="course-video-options">
                    
                <div onClick={() => dispatch({type:"DESCRIPTION"})}
                     style={{backgroundColor: option === "description" && "orange",
                             borderBottom: option === "description" && "none"}}>
                    Description
                </div>
                <div onClick={() => dispatch({type:"COMMENTS"})}
                     style={{backgroundColor: option === "comments" && "orange",
                             borderBottom: option === "comments" && "none"}}>
                    Comments
                </div>
                <span></span>

            </div>

            {
                (option === "description") ?
                        
                <React.Fragment>
                    <h2>Course {elt}</h2>
                    <p className="description-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem molestias illum neque rerum quaerat iusto tenetur ab laboriosam itaque voluptate quibusdam earum deserunt quasi nisi, tempore perspiciatis, beatae sit doloremque consequatur voluptas? Porro assumenda sunt praesentium quo, aperiam perspiciatis, repellat deleniti soluta veritatis inventore ducimus nihil repellendus dolorum voluptates? Nostrum quibusdam assumenda accusamus rem sed est officiis beatae nulla, sequi ipsa quae, iure delectus? Ipsam sequi autem amet temporibus.</p>
                </React.Fragment>
                        
                :

                <CommentSection/>
            }
        </div>
    )
}
