import React, {useState, useEffect, useRef} from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
export default function Info() {
    
    // The positions in the X and Y axis of the cursor are declared
    const [posX, setPosX] = useState();
    const [posY, setPosY] = useState();
    
    //Reference of the info container
    const mainInfo = useRef();

    useEffect(() => {
        /*Initialisation of AOS in order to make
        the container slide to the left when it's 
         scrolled on*/
        AOS.init({
            duration : 1000
        });

    }, [])
    
    /*Each time the mouse moves on the container,
      that function will take it's current position and apply
     the flash effect on the container based on it*/
    function handleMove(e){
        setPosX(e.clientX+"px");
        setPosY(e.clientY+"px");
        mainInfo.current.style.setProperty('--cursorX', posX);
        mainInfo.current.style.setProperty('--cursorY', posY);
    }
    return (
        <div 
            className="main-info" 
            data-aos="slide-left" data-aos-anchor-placement="bottom" 
            ref={mainInfo}
            onMouseMove={handleMove}
        >
            <div className="main-info-content">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, repellat.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis quis asperiores, enim esse deleniti iste harum hic accusamus reprehenderit quaerat repellat optio laboriosam repellendus ab ipsam earum possimus. Labore quos quaerat at corporis esse! Asperiores, qui labore quia ratione tenetur obcaecati sint, accusamus excepturi quibusdam fuga deleniti nihil. Repellat?</p>
                <a href="/">Click Here!</a>
            </div>
        </div>
    )
}
