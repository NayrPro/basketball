import React, {useState, useRef} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

export default function Info() {
    
    
    // The positions in the X and Y axis of the cursor are declared
    const [posX, setPosX] = useState();
    const [posY, setPosY] = useState();
     
    //Reference of the info container
    const mainInfo = useRef();
    
    /*Each time the mouse moves on the container,
    that function will take it's current position and apply
    the flash effect on the container based on it*/
    function handleMove(e){
        setPosX(e.clientX+"px");
        setPosY(e.clientY+"px");
        mainInfo.current.style.setProperty('--cursorX', posX);
        mainInfo.current.style.setProperty('--cursorY', posY);
    }
    
    /** Bringing the state windowSize from windowSizeReducer to apply 
        or not aos animation on main-info depending on its value */
    const {windowSize} = useSelector(state => ({...state.windowSizeReducer})) 
     
    return (
        <div 
            className="main-info" 
            data-aos = {windowSize > 992 ? "zoom-in" : ""}
            ref={mainInfo}
            onMouseMove={handleMove}
        >
            <div className="main-info-content lazy"
                data-src={require("../images/stadium.jpg")}
                data-srcset={require("../images/stadium.jpg")}
            >
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repellat.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis quis asperiores, enim esse deleniti iste harum hic accusamus reprehenderit quaerat repellat optio laboriosam repellendus ab ipsam earum possimus. Labore quos quaerat at corporis esse! Asperiores, qui labore quia ratione tenetur obcaecati sint, accusamus excepturi quibusdam fuga deleniti nihil. Repellat?</p>
                <Link to="/" replace>Click Here!</Link>
            </div>
        </div>
    )
}
