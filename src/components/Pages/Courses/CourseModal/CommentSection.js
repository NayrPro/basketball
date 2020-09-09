import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {v4 as uuidv4} from "uuid"

export default function CommentSection() {

    const {elt} = useSelector(state => ({...state.coursesEltReducer}))
    const {comments, username, comment} = useSelector(state => ({...state.commentsReducer}))

    const dispatch = useDispatch()

    function handleChange(e){
        e.target.className === "comment-user" ? 
            dispatch({
                type:"USER",
                payload: e.target.value 
            })
            : 
            dispatch({
                type:"CMT",
                payload: e.target.value 
            })
    }

    function commentList(){
        if (comments[elt-1] !== undefined){
            return comments[elt-1].map(comment => 
                (
                    <div  key={uuidv4()}
                        className="comment-paragraph">
                        <p>from <span style={{color: "yellow"}}>{comment.username}</span> , {comment.date}:</p><br/>
                        {comment.comment}  
                    </div>
                )
            )
        }
    }

    function sendComment(){
        const date = new Date()
        const time = new Date()
        const fullDate = date.toLocaleDateString("en-US")+" "+time.toLocaleTimeString("en-US")
        const newComment = {username:username, comment: comment, date: fullDate} 
        const array = comments
        array[elt-1].push(newComment)
    
        dispatch({
            type:"CMTS",
            payload: array 
        })
    
        dispatch({
            type:"VALIDATE",
            payload: "on"
        })
    }

    return (
        <React.Fragment>
            <p className="comment-label">Enter your username:</p>
            <input type="text" className="comment-user" onChange={(e) => handleChange(e)}></input>
            <p className="comment-label">Leave your comment:</p>
            <textarea className="comment-input" onChange={(e) => handleChange(e)}></textarea>
            <button className="comment-button" onClick={sendComment}>Comment</button>
            { 
                commentList()
            }
        </React.Fragment>
    )
}
