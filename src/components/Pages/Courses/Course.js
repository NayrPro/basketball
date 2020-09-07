import React, {useState, useEffect} from 'react'
import "./courses.css"
import {useSelector, useDispatch} from "react-redux"
import {v4 as uuidv4} from "uuid"

export default function Course() {

    const {elt} = useSelector(state => ({...state.coursesEltReducer}))
    const {comments, username, comment} = useSelector(state => ({...state.commentsReducer})) 
    const dispatch = useDispatch() 
    const [options, setOptions] = useState("description")
    const [coursesCompleted, setCoursesCompleted] = useState(0)
    const [validate, setValidate] = useState("")

    
    useEffect(() => {
        validate === "on" && setTimeout(() => {
            setValidate("")  
        }, 700);
    }, [validate])


    function commentList(){
        if (comments[elt-1] !== undefined){
            return comments[elt-1].map(comment => 
                (
                    <p  key={uuidv4()}
                        className="comment-paragraph">
                        <span>from <span style={{color: "yellow"}}>{comment.username}</span> , {comment.date}:</span><br/><br/>
                        {comment.comment}  
                    </p>
                )
            )
        }
    }

    function activeElement(courseNb){
        dispatch({
            type: "ELT",
            payload: courseNb
        })
    }

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
                className="courses-list-elmt" 
                style={{backgroundColor: i === elt && "orange"}}
                onClick={() => activeElement(i)}
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
    
        setValidate("on")
    }

    return (
        <div className="course-videos">

            <div className="course-video-container">

                <video className="course-video" controls>
                    <source src="/" type="video/mp4"/>
                </video> 
                
                <div className="course-video-description">
                    <div className={"comment-validated "+validate}>Your comment has been sent!</div>
                    <div className="course-video-options">
                        <div 
                            onClick={() => setOptions("description")}
                            style={{backgroundColor: options === "description" && "orange",
                                    borderBottom: options === "description" && "none"
                                   }}
                        >
                            Description
                        </div>
                        <div 
                            onClick={() => setOptions("comments")}
                            style={{backgroundColor: options === "comments" && "orange",
                                    borderBottom: options === "comments" && "none"
                                   }}
                        >
                            Comments
                        </div>
                        <span></span>
                    </div>
                    {
                        (options === "description") ?
                        <React.Fragment>
                            <h2>Course {elt}</h2>
                            <p className="description-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem molestias illum neque rerum quaerat iusto tenetur ab laboriosam itaque voluptate quibusdam earum deserunt quasi nisi, tempore perspiciatis, beatae sit doloremque consequatur voluptas? Porro assumenda sunt praesentium quo, aperiam perspiciatis, repellat deleniti soluta veritatis inventore ducimus nihil repellendus dolorum voluptates? Nostrum quibusdam assumenda accusamus rem sed est officiis beatae nulla, sequi ipsa quae, iure delectus? Ipsam sequi autem amet temporibus.</p>
                        </React.Fragment>
                        :
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
                    }
                </div>

            </div>
            
            <div className="courses-list-container">
                <div className="courses-list-header">
                    <div>
	                    <p>Courses Playlist</p>
	                    <span>{coursesCompleted}/45</span>
                    </div>
                    <i 
                        className="fas fa-times" 
                        onClick={() => {
                            dispatch({
                                type:"QUIT"
                            })    
                        }}
                    ></i>
                </div>
                {courses()}
            </div>
        </div>
    )
}
